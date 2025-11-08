package com.app.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.pojo.Customer;
import com.app.pojo.Role;
import com.app.pojo.Vendor;


@SpringBootTest
public class CustomerTest {
	
	@Autowired
	private CustomerRepository custRepo;
	
//	@Autowired
//	private TestEntityManager entityManager;
	
	@Test
	void testAddCustomer() {
		//String password, String email, Role role, String name, String address, String phoneNo, String city,
		//String state, String postalCode
		List<Customer> customers=Arrays.asList(
				new Customer("2234", "ab@gmail.com", Role.CUSTOMER, "Vipin", "mumbai", "9999999999", "pune", "MH", "414441"),
				new Customer("3234", "abc@gmail.com", Role.CUSTOMER, "Sanket", "delhi", "9999999999", "pune", "MH", "414441"));
		custRepo.saveAll(customers);
	}
	
	@Autowired
	private VendorRepository vendorRepo;
	@Test
	void testAddVendor() {
		//String password, String email, Role role, String name, String address, String phoneNo, String city,
		//String state, String postalCode
		List<Vendor> vendors=Arrays.asList(
				new Vendor("2234", "ab@gmail.com", Role.VENDOR, "Vipin", "mumbai", "9999999999", "pune", "MH", "414441"),
				new Vendor("3234", "abc@gmail.com", Role.VENDOR, "Sanket", "delhi", "9999999999", "pune", "MH", "414441"));
		vendorRepo.saveAll(vendors);
	}
	
	
	

}
