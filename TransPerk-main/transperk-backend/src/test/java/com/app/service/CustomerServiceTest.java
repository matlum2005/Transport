package com.app.service;


import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.dao.PaymentDetailRepository;
import com.app.dao.RequestRepository;
import com.app.dao.VendorRepository;
import com.app.pojo.Customer;
import com.app.pojo.PaymentDetails;
import com.app.pojo.PaymentMode;
import com.app.pojo.Ratings;
import com.app.pojo.RequestStatus;
import com.app.pojo.Requests;
import com.app.pojo.Role;
import com.app.pojo.TruckType;
import com.app.pojo.VehicleDetails;
import com.app.pojo.Vendor;

@SpringBootTest
public class CustomerServiceTest {
	@Autowired
	private ICustomerService custService;
	
	
	@Autowired
	private VendorRepository vendorRepo;
	
	@Autowired
	private PaymentDetailRepository paymentRepo;
	
	@Autowired
	private RequestRepository requestRepo;
	
	@Test
	void testAddCustomer() {
		//String password, String email, Role role, String name, String address, String phoneNo, String city,
		//String state, String postalCode
		Customer customers=
				new Customer("3333", "ram@gmail.com", Role.CUSTOMER, "Ram", "mumbai", "9999999999", "pune", "MH", "414441");
		custService.saveCustomerDetails(customers);
	}
	@Test
	public void loginCustomer() {
		Customer customer = custService.customerLogin("akshay@gmail.com", "1234");
		assertEquals(7, customer.getId());
	}
	
	@Test
	public void getCustomerDetailsById() {
		Customer customer = custService.getCustomerById(4);
		System.out.println(customer.getEmail());
		assertEquals("ram@gmail.com", customer.getEmail());
	}
	
	@Test
	public void updateCustomerDetails() {
		Customer customers = custService.getCustomerById(4);
		customers.setPhoneNo("8888888888");
		custService.updateCustomerDetails(customers);
		System.out.println(customers.getPhoneNo());
		assertEquals("8888888888", customers.getPhoneNo());
	}
	
	@Test
	public void deleteCustomerDetails() {
		Customer customers = custService.getCustomerById(4);
		//request.setDestination("delhi");
		//custService.deleteRequest(request.getRequestId());
		custService.deleteCustomerDetails(customers.getId());
		
	}
	
	@Test
	public void getVendorByCity() {
		List<Vendor> vendors = custService.getVendorByCity("mumbai");
		vendors.forEach(c -> System.out.println(c.getName()));
		assertEquals(0, vendors.size());
	}
	
	
	@Test
	void testAddRequest() {
		/*String pickUp, String destination, Date requestDate, TruckType truckType, String requestStatus,
		String goodsType, Customer customer, Vendor vendor, VehicleDetails vDetails, Ratings ratings,
		PaymentDetails payment*/
		Customer customer = custService.getCustomerById(3);
		Vendor vendor = vendorRepo.getById(3);
		//Date deliveryDate, String driverName, String truckNo, String driverPhone) {
			
		//VehicleDetails vDetails = new VehicleDetails(new Date(2021-9-19), "Pradip", "MH-212", "7777777777");
		
		//Ratings rating = new Ratings(3.5);
		
		//String transactionId, Double paidAmount, Date paymentDate, PaymentMode paymentMode
		//PaymentDetails payment = new PaymentDetails("ABCD125", 11500.00, new Date(2021-9-19), PaymentMode.CHEQUE);
		
		/*
		 * Requests request = new Requests("chennai", "mumbai", new Date(2021-01-20),
		 * TruckType.MINI407_2000KG, RequestStatus.REQUESTED, "Steel", customer,
		 * vendor);
		 * 
		 * custService.request(request,3,3);
		 * 
		 * assertEquals("chennai", request.getPickUp()); assertEquals("Sanket",
		 * request.getCustomer().getName()); assertEquals(3,
		 * request.getVendor().getId());
		 */
		
		
	}

	@Test
	public void checkRequestStatus() {
		/*
		 * String request = custService.checkRequestStatus(7);
		 * System.out.println(request); assertEquals("REQUESTED", request.toString());
		 */
	}
	
	@Test
	public void updateRequestDetails() {
		Requests request = custService.getRequestById(7);
		request.setDestination("delhi");
		custService.updateRequestDetails(request);
		assertEquals("delhi", request.getDestination());
		
	}
	
	
	@Test
	public void deleteRequestDetails() {
		Requests request = custService.getRequestById(5);
		//request.setDestination("delhi");
		//custService.deleteRequest(request.getRequestId());
		custService.deleteRequest(request.getId());
		
	}
	
	@Test
	public void makePaymentForRequest() {
		
		PaymentDetails makePay=new PaymentDetails("000ABCD5", 6000.00, PaymentMode.CHEQUE);
		
		custService.makeRequestPayment(8, makePay);	
	}
	
	@Test
	public void rateRequest() {
		//custService.requestRating(8, 2.5);
		
	}
	
	
	

}
