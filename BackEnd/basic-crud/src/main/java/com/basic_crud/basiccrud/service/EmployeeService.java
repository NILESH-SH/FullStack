package com.basic_crud.basiccrud.service;

import java.util.List;

import com.basic_crud.basiccrud.entity.EmployeeEntity;

public interface EmployeeService {

    EmployeeEntity createEmployee(EmployeeEntity employee);

    List<EmployeeEntity> getAllEmployee();
    
}
