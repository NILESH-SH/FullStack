package com.basic_crud.basiccrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.basic_crud.basiccrud.entity.EmployeeEntity;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity,Long> {
    
}
