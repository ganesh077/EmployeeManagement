package com.ganesh.ems.service.impl;

import com.ganesh.ems.dto.EmployeeDTO;
import com.ganesh.ems.entity.Employee;
import com.ganesh.ems.exception.ResourceNotFoundException;
import com.ganesh.ems.mapper.EmployeeMapper;
import com.ganesh.ems.repository.EmployeeRepository;
import com.ganesh.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;


    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee = EmployeeMapper.maptoEmployee(employeeDTO);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.maptoEmployeeDTO(savedEmployee);

    }

    @Override
    public EmployeeDTO getEmployeebyId(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).
                orElseThrow(() ->
                        new ResourceNotFoundException("Employee id doesn't exist" + employeeId));
        return EmployeeMapper.maptoEmployeeDTO(employee);
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();

        return employees.stream().map((employee) -> EmployeeMapper.maptoEmployeeDTO(employee)).
                collect(Collectors.toList());
    }

    @Override
    public EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO employeeDTO) {
        Employee employee = employeeRepository.findById(employeeId).
                orElseThrow(() ->
                        new ResourceNotFoundException("Employee id doesn't exist" + employeeId));

        employee.setFirstname(employeeDTO.getFirstname());
        employee.setLastname(employeeDTO.getLastname());
        employee.setEmail(employeeDTO.getEmail());

        Employee updatedEmployee =  employeeRepository.save(employee);

        return EmployeeMapper.maptoEmployeeDTO(updatedEmployee);

    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).
                            orElseThrow(()->
                                    new ResourceNotFoundException("Employee ID Not found" + employeeId));

        employeeRepository.deleteById(employeeId);
    }


}
