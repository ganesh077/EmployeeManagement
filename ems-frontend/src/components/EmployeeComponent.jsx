import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createemployee, geteemployee,updateemployee } from '../services/EmployeeService';

const EmployeeComponent = () => {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const {id} = useParams();

    const [errList, setErrList] = useState({
        firstname : '',
        lastname : '',
        email : ''
    });
    
    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            geteemployee(id).then((res) => {
                setFirstName(res.data.firstname);
                setLastName(res.data.lastname);
                setEmail(res.data.email);
            }).catch((err) => console.log(err))
        }
    }, [id])
    
    function saveOrUpdateEmployee(e) {
        e.preventDefault();
        if (validateErrors()) {
        const employee = {firstname, lastname, email};
        if (id) {
            updateemployee(id, employee).then(() => navigator('/')).catch((err) => console.log(err))
        } else {
        createemployee(employee).then((res) => navigator('/')).catch((err) => console.log(err));
    }
    }
    }

    function validateErrors() {
        let valid = true

        const errorsCopy = {...errList}
        if (firstname.trim() != '') {
            errorsCopy.firstname = ''
        }
        else {
            errorsCopy.firstname = 'Firstname cannot be empty'
            valid = false
        }
        if (lastname.trim() != '') {
            errorsCopy.lastname = ''
        }
        else {
            errorsCopy.lastname = 'Lastname cannot be empty'
            valid = false
        }
        if (email.trim() != '') {
            errorsCopy.email = ''
        }
        else {
            errorsCopy.email  = 'Email cannot be empty'
            valid = false
        }

        setErrList(errorsCopy)

        return valid

    }

    function pageTitle() {
        if(id) {
            return <h2 className='text-center'>Update Employee</h2>
        }
        else {
            <h2 className='text-center'>Add Employee</h2>
        }
      }

  return (
    <div className='container'>
        <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3'>
                {pageTitle()}
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input
                                type='text'
                                placeholder='Enter Employee First Name'
                                name = 'firstname'
                                value = {firstname}
                                className={`form-control ${errList.firstname && 'is-invalid'}`}
                                onChange={(e) => setFirstName(e.target.value)}
                            >
                            </input>
                            {errList.firstname && <div className='invalid-feedback'> {errList.firstname} </div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Last Name'
                                name = 'lastname'
                                value = {lastname}
                                className={`form-control ${errList.lastname && 'is-invalid'}`}
                                onChange={(e) => setLastName(e.target.value)}
                            >
                            </input>
                            {errList.lastname && <div className='invalid-feedback'> {errList.lastname} </div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email</label>
                            <input
                                type='email'
                                placeholder='Enter Employee Email'
                                name = 'email'
                                value = {email}
                                className={`form-control ${errList.email && 'is-invalid'}`}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </input>
                            {errList.email && <div className='invalid-feedback'> {errList.email} </div>}
                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>

            </div>
        </div>

    </div>
  )
}

export default EmployeeComponent