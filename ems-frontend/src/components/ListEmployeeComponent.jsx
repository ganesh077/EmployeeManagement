import React, { useEffect, useState } from 'react'
import { deleteemployee, listemployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom';


const ListEmployeeComponent = () => {

  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, [])

  function getAllEmployees() {
    listemployees().then((res) => {
        setEmployees(res.data);
    }).catch((err) => {
        console.error(err);
    }
    )
  }
  function addNewEmployee() {
        navigator('/add-employees');
  }

  function updateEmployee(id) {
    navigator(`/edit-employees/${id}`);
  }

  function removeEmployee(id) {
    deleteemployee(id).then((res) => {
        getAllEmployees(); 
    }).catch((err) => {
        console.log(err);
    })
  }
  
  return (
    <div className='container'> 
    <h2 className='text-center' style={{margin: '10px'}}>List of Employees</h2>
    <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
    <table className='table table-striped table-bordered w-100'>
        <thead>
            <tr>
                <th>id</th>
                <th>firstname</th>
                <th>lastname</th>
                <th>email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map(emp => 
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.firstname}</td>
                        <td>{emp.lastname}</td>
                        <td>{emp.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => updateEmployee(emp.id)}>Update</button>
                            <button className='btn btn-danger' onClick={() => removeEmployee(emp.id)}
                                style={{marginLeft : '10px'}}>Delete</button>
                        </td>
                    </tr> 
                )
            }
        </tbody>
    </table>
    </div>
  )
}

export default ListEmployeeComponent