package com.ganesh.ems.controller;

import com.ganesh.ems.dto.EmployeeDTO;
import com.ganesh.ems.entity.Employee;
import com.ganesh.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    private EmployeeService employeeService;
    @PostMapping
    public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeDTO employeeDTO){
        EmployeeDTO savedEmployee = employeeService.createEmployee(employeeDTO);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<EmployeeDTO> getEmployeeById(@PathVariable("id") Long employeeID){
        EmployeeDTO employeeDTO = employeeService.getEmployeebyId(employeeID);
        return ResponseEntity.ok(employeeDTO);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getAllEmployees(){
        List<EmployeeDTO> employeeDTOs = employeeService.getAllEmployees();
        return ResponseEntity.ok(employeeDTOs);
    }

    @PostMapping("{id}")
    public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable("id") Long employeeID, @RequestBody EmployeeDTO employeeDTO){
        EmployeeDTO savedEmployee = employeeService.updateEmployee(employeeID,employeeDTO);
        return ResponseEntity.ok(savedEmployee);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeID) {
        employeeService.deleteEmployee(employeeID);
        return ResponseEntity.ok("Employee #" + employeeID + " deleted!");
    }

}
