package com.ganesh.ems.service;

import com.ganesh.ems.dto.EmployeeDTO;
import com.ganesh.ems.entity.Employee;

import java.util.List;

public interface EmployeeService {
    EmployeeDTO createEmployee(EmployeeDTO employeeDTO);
    EmployeeDTO getEmployeebyId(Long employeeId);
    List<EmployeeDTO> getAllEmployees();
    EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO employeeDTO);
    void deleteEmployee(Long employeeId);

}
