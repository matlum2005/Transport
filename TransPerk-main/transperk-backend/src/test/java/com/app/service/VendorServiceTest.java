package com.app.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.sql.Date;
import java.time.LocalDate;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.dao.PaymentDetailRepository;
import com.app.dao.RequestRepository;
import com.app.dao.VehicleRepository;
import com.app.dao.VendorRepository;
import com.app.pojo.Customer;
import com.app.pojo.Requests;
import com.app.pojo.Role;
import com.app.pojo.VehicleDetails;
import com.app.pojo.Vendor;

@SpringBootTest
public class VendorServiceTest {
	@Autowired
	private IVendorService vendorService;
	
	
	@Autowired
	private VendorRepository vendorRepo;
	
	@Autowired
	private PaymentDetailRepository paymentRepo;
	
	@Autowired
	private RequestRepository requestRepo;
	
	@Autowired
	private VehicleRepository vehicleRepo;
	
	
	@Test
	void testAddVendor() {
		//String password, String email, Role role, String name, String address, String phoneNo, String city,
		//String state, String postalCode
		Vendor vendors=
				new Vendor("3333", "ram1@gmail.com", Role.VENDOR, "Ram", "mumbai", "9999999999", "pune", "MH", "414441");
		vendorService.saveVendorDetails(vendors);
	}
	@Test
	public void loginVendor() {
		Vendor vendor = vendorService.vendorLogin("ram@gmail.com", "3333");
		assertEquals(3, vendor.getId());
	}
	
	@Test
	public void getVendorDetailsById() {
		Vendor vendor = vendorService.getVendorById(3);
		System.out.println(vendor.getEmail());
		assertEquals("ram@gmail.com", vendor.getEmail());
	}
	
	@Test
	public void updateVendorDetails() {
		Vendor vendors = vendorService.getVendorById(3);
		vendors.setName("Shyam");
		vendorService.updateVendorDetails(vendors);
		System.out.println(vendors.getName());
		assertEquals("Shyam", vendors.getName());
	}
	
	@Test
	public void deleteVendorDetails() {
		Vendor vendors = vendorService.getVendorById(2);
		//request.setDestination("delhi");
		//custService.deleteRequest(request.getRequestId());
		vendorService.deleteVendorDetails(vendors.getId());
		
	}
	
//	@Test
//	public void getRequestByVendorId() {
//		List<Requests> requests = vendorService.getRequestsByVendorId(1);
//		requests.forEach(c -> System.out.println(c.getId()));
//		assertEquals(2, requests.size());
//	}
	
	@Test
	public void acceptRequest() {
		vendorService.acceptRequest(8);
	
	}
	@Test
	public void rejectRequest() {
		vendorService.rejectRequest(1);
	
	}
	
	@Test
	public void completeRequest() {
		vendorService.completeRequest(1);
	}
	
	@Test
	public void addVehicleDetails() {
		//Requests request = requestRepo.getById(3);
		Date date = Date.valueOf("2021-9-30");
		VehicleDetails vDetails = new VehicleDetails(date, "Sandip", "MH-16", "7057271067");
		vendorService.addVehicleDetailsForRequest(8, vDetails);
		
	}
	
	
	

}
