package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojo.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{
	
//	@Query("select c from Customer c where c.email =: email and c.password =:password")
//	Customer customerLogin(@Param("email")String email,@Param("password")String password);
	
	Customer findCustomerByEmailAndPassword(String email,String password);
	

}
