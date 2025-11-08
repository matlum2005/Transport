package com.app.service;

import java.util.List;

import com.app.pojo.Customer;
import com.app.pojo.PaymentDetails;
import com.app.pojo.Ratings;
import com.app.pojo.Requests;
import com.app.pojo.Vendor;

public interface ICustomerService {
	
	String saveCustomerDetails(Customer customer);
	
	Customer customerLogin(String email,String password);
	
	Customer getCustomerById(int id);
	
	Customer updateCustomerDetails(Customer customer);
	
	String deleteCustomerDetails(int customerId);
	
	List<Vendor> getVendorByCity(String city);
	
	String request(Requests request,int customerId,int vendorId);
	
	Requests checkRequestStatus(int requestId);
	
	String updateRequestDetails(Requests request);
	
	String deleteRequest(int requestId);
	
	String makeRequestPayment(int requestId,PaymentDetails payment);
	
	String requestRating(int requestId,Ratings rating);
	
	Requests getRequestById(int requestid);
	
	List<Requests> getRequestByCustomerId(int customerId);
	
	void generateVendorRating();
	
}
