import axios from 'axios';

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const listemployees = () => axios.get(REST_API_BASE_URL); 

export const createemployee = (employee) => axios.post(REST_API_BASE_URL, employee); 

export const updateemployee = (id, employee) => axios.post(REST_API_BASE_URL +'/'+id, employee);

export const geteemployee = (id) => axios.get(REST_API_BASE_URL +'/'+id);

export const deleteemployee = (id) => axios.delete(REST_API_BASE_URL +'/'+id);

 