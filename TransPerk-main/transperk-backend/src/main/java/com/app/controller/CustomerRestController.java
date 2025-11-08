package com.app.controller;



import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.pojo.Customer;
import com.app.pojo.PaymentDetails;
import com.app.pojo.Ratings;
import com.app.pojo.Requests;
import com.app.service.ICustomerService;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins =  "http://localhost:3000")
public class CustomerRestController {
	
	@Autowired
	private ICustomerService custService;

	public CustomerRestController() {
		System.out.println("in ctor of "+getClass().getName());
	}
	
	@PostMapping
	public ResponseEntity<?> saveCustomerDetails(@RequestBody @Valid Customer customer) {
		System.out.println("in save Customer "+customer);
		return new ResponseEntity<>(custService.saveCustomerDetails(customer),HttpStatus.CREATED);
	}
	
	@PostMapping("/login") //taking email and password through payload
	public Customer loginCustomer(@RequestBody @Valid LoginRequest payload){
		System.out.println("auth cust "+payload);
		return custService.customerLogin(payload.getEmail(),payload.getPassword());
	}
	
	@GetMapping("/{customerId}")
	public ResponseEntity<?> getCustomerDetailsById(@PathVariable int customerId){
		System.out.println("in get customer details "+customerId);
		return ResponseEntity.ok(custService.getCustomerById(customerId));
		
	}
	
	@DeleteMapping("/{customerId}")
	public ResponseEntity<String> deleteCustomerDetails(@PathVariable int customerId){
		System.out.println("in del customer Details "+customerId);
		return ResponseEntity.ok(custService.deleteCustomerDetails(customerId));
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> updateCustomerDetails(@RequestBody Customer detachedCustomer){
		//check if user exit by id
		custService.getCustomerById(detachedCustomer.getId());
		return ResponseEntity.ok(custService.updateCustomerDetails(detachedCustomer));
	}
	
	@GetMapping("/requests/{customerId}")
	public ResponseEntity<?> getRequestsByCustomerId(@PathVariable int customerId){
		System.out.println("in get requests  "+customerId);
		return ResponseEntity.ok(custService.getRequestByCustomerId(customerId));
		
	}
	
	@GetMapping("/single_request/{requestId}")
	public ResponseEntity<?> getRequestDetailsByRequestId(@PathVariable int requestId){
		System.out.println("in get Request details "+requestId);
		return ResponseEntity.ok(custService.getRequestById(requestId));
		
	}
	
	@GetMapping("/vendor_by_city/{city}")
	public ResponseEntity<?> getVendorsByCity(@PathVariable String city){
		System.out.println("in get vendor by city details "+city);
		return ResponseEntity.ok(custService.getVendorByCity(city));
		
	}
	
	@PostMapping("/send_request/{customerId}/{vendorId}")
	public ResponseEntity<?> sendRequest(@RequestBody @Valid Requests request,@PathVariable int customerId,@PathVariable int vendorId) {
		System.out.println("in save request "+request.getId());
		return new ResponseEntity<>(custService.request(request,customerId,vendorId),HttpStatus.CREATED);
	}
	
	@GetMapping("request_status/{requestId}")
	public ResponseEntity<?> getRequestStatusByRequestId(@PathVariable int requestId){
		System.out.println("in get request status details "+requestId);
		return ResponseEntity.ok(custService.checkRequestStatus(requestId));
		
	}
	
	@PutMapping("/update_request")
	public ResponseEntity<?> updateRequestDetails(@RequestBody Requests detachedRequest){
		//check if user exit by id
		custService.getRequestById(detachedRequest.getId());
		return ResponseEntity.ok(custService.updateRequestDetails(detachedRequest));
	}
	
	@DeleteMapping("/delete_request/{requestId}")
	public ResponseEntity<String> deleteRequest(@PathVariable int requestId){
		System.out.println("in del request Details "+requestId);
		return ResponseEntity.ok(custService.deleteRequest(requestId));
	}
	
	@PostMapping("/request_payment/{requestId}")
	public ResponseEntity<?> savePaymentForRequest(@RequestBody @Valid PaymentDetails payment,@PathVariable int requestId) {
		System.out.println("in save Payment "+payment);
		return new ResponseEntity<>(custService.makeRequestPayment(requestId, payment),HttpStatus.CREATED);
	}
	
	@PostMapping("/request_rating/{requestId}")
	public ResponseEntity<?> saveRatingForRequest(@RequestBody @Valid Ratings rating,@PathVariable int requestId) {
		System.out.println("in save rating "+rating);
		return new ResponseEntity<>(custService.requestRating(requestId, rating),HttpStatus.CREATED);
	}
	
	
}
