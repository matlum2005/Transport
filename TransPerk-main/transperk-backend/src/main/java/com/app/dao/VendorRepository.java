package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.app.pojo.Vendor;


public interface VendorRepository extends JpaRepository<Vendor, Integer> {
	List<Vendor> findByCity(String city);
	
	Vendor findVendorByEmailAndPassword(String email,String password);
	List<Vendor> findAll();
	
}
