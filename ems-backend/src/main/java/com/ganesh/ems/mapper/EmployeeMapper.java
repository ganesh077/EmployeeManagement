package com.ganesh.ems.mapper;

import com.ganesh.ems.dto.EmployeeDTO;
import com.ganesh.ems.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDTO maptoEmployeeDTO(Employee employee){
        return new EmployeeDTO(
                employee.getId(),
                employee.getFirstname(),
                employee.getLastname(),
                employee.getEmail()
        );
    }

    public static Employee maptoEmployee(EmployeeDTO employeeDTO){
        return new Employee(
                employeeDTO.getId(),
                employeeDTO.getFirstname(),
                employeeDTO.getLastname(),
                employeeDTO.getEmail()
        );
    }
}
