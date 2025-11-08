package com.app.dao;

import java.util.Date;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.pojo.Customer;
import com.app.pojo.PaymentDetails;
import com.app.pojo.PaymentMode;
import com.app.pojo.Ratings;
import com.app.pojo.RequestStatus;
import com.app.pojo.Requests;
import com.app.pojo.TruckType;
import com.app.pojo.VehicleDetails;
import com.app.pojo.Vendor;

@SpringBootTest
public class RequestTest {
	
	@Autowired
	private RequestRepository requestRepo;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private VendorRepository vendorRepository;
	
	@Autowired
	private VehicleRepository vehicleRepository;
	
	@Autowired
	private RatingsRepository ratingRepo;
	
	@Autowired
	private PaymentDetailRepository paymentRepo;
	
	@Test
	void testAddRequest() {
		/*String pickUp, String destination, Date requestDate, TruckType truckType, String requestStatus,
		String goodsType, Customer customer, Vendor vendor, VehicleDetails vDetails, Ratings ratings,
		PaymentDetails payment*/
		Customer customer = customerRepository.findById(1).get();
		Vendor vendor = vendorRepository.findById(1).get();
		//Date deliveryDate, String driverName, String truckNo, String driverPhone) {
			
		//VehicleDetails vDetails = new VehicleDetails(new Date(2021-9-18), "Rushi", "MH-211", "9698989899");
		
		//Ratings rating = new Ratings(5);
		
		//String transactionId, Double paidAmount, Date paymentDate, PaymentMode paymentMode
		//PaymentDetails payment = new PaymentDetails("ABCD123", 10000.00, new Date(2021-9-18), PaymentMode.CASH);
		
		/*
		 * Requests request = new Requests("pune", "mumbai", new Date(2021-01-18),
		 * TruckType.LARGE1109_8320KG, RequestStatus.REQUESTED, "Cloths", customer,
		 * vendor, vDetails, rating, payment);
		 */
		//Requests request = new Requests("pune", "satara", new Date(), TruckType.MEDIUM709_3800KG, RequestStatus.REQUESTED, "Electronics",customer,vendor);
		
		//requestRepo.save(request);
	}

}
