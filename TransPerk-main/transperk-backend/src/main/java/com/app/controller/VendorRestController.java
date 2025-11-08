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
import com.app.pojo.VehicleDetails;
import com.app.pojo.Vendor;
import com.app.service.ICustomerService;
import com.app.service.IVendorService;

@RestController
@RequestMapping("/vendor")
@CrossOrigin(origins =  "http://localhost:3000")
public class VendorRestController {
	
	@Autowired
	private IVendorService vendorService;
	
	@Autowired
	private ICustomerService custService;
	
	public VendorRestController() {
		System.out.println("in ctor of "+getClass().getName());
	}
	
	@PostMapping
	public ResponseEntity<?> saveVendorDetails(@RequestBody @Valid Vendor vendor) {
		System.out.println("in save Vendor "+vendor);
		return new ResponseEntity<>(vendorService.saveVendorDetails(vendor),HttpStatus.CREATED);
	}
	@PostMapping("/login")
	public Vendor loginVendor(@RequestBody @Valid LoginRequest payload){
		System.out.println("auth vendor "+payload);
		return vendorService.vendorLogin(payload.getEmail(),payload.getPassword());
	}
	
	@GetMapping("/{vendorId}")
	public ResponseEntity<?> getVendorDetailsById(@PathVariable int vendorId){
		System.out.println("in get vendor details "+vendorId);
		return ResponseEntity.ok(vendorService.getVendorById(vendorId));
		
	}
	@DeleteMapping("/{vendorId}")
	public ResponseEntity<String> deleteVendorDetails(@PathVariable int vendorId){
		System.out.println("in del vendor Details "+vendorId);
		return ResponseEntity.ok(vendorService.deleteVendorDetails(vendorId));
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> updateVendorDetails(@RequestBody Vendor detachedVendor){
		//check if user exit by id
		vendorService.getVendorById(detachedVendor.getId());
		return ResponseEntity.ok(vendorService.updateVendorDetails(detachedVendor));
	}

	@GetMapping("/new_requests/{vendorId}")
	public ResponseEntity<?> getNewRequestsByVendorId(@PathVariable int vendorId){
		System.out.println("in get requests  "+vendorId);
		return ResponseEntity.ok(vendorService.getNewRequestsByVendorId(vendorId));
		
	}
	
	@DeleteMapping("/delete_request/{requestId}")
	public ResponseEntity<String> deleteRequest(@PathVariable int requestId){
		System.out.println("in del request Details "+requestId);
		return ResponseEntity.ok(custService.deleteRequest(requestId));
	}
	
	@GetMapping("/pending_requests/{vendorId}")
	public ResponseEntity<?> getPendingRequestsByVendorId(@PathVariable int vendorId){
		System.out.println("in get requests  "+vendorId);
		return ResponseEntity.ok(vendorService.getPendingRequestsByVendorId(vendorId));
		
	}
	@GetMapping("/complete_requests/{vendorId}")
	public ResponseEntity<?> getCompleteRequestsByVendorId(@PathVariable int vendorId){
		System.out.println("in get requests  "+vendorId);
		return ResponseEntity.ok(vendorService.getCompleteRequestsByVendorId(vendorId));
	}
	
	@PostMapping("/accept_request/{requestId}")
	public ResponseEntity<?> acceptRequest(@PathVariable int requestId){
		System.out.println("in accept request "+requestId);
		return new ResponseEntity<>(vendorService.acceptRequest(requestId),HttpStatus.CREATED);
	}
	
	@PostMapping("/reject_request/{requestId}")
	public ResponseEntity<?> rejectRequest(@PathVariable int requestId){
		System.out.println("in reject request "+requestId);
		return new ResponseEntity<>(vendorService.rejectRequest(requestId),HttpStatus.CREATED);
	}
	
	@PostMapping("/complete_request/{requestId}")
	public ResponseEntity<?> completeRequest(@PathVariable int requestId){
		System.out.println("in complete request "+requestId);
		return new ResponseEntity<>(vendorService.completeRequest(requestId),HttpStatus.CREATED);
	}
	
	@PostMapping("/add_vehicle/{requestId}")
	public ResponseEntity<?> saveVehicleDetails(@RequestBody @Valid VehicleDetails vehicle,@PathVariable int requestId) {
		System.out.println("in save vehicle details "+vehicle);
		return new ResponseEntity<>(vendorService.addVehicleDetailsForRequest(requestId, vehicle),HttpStatus.CREATED);
	}
}
