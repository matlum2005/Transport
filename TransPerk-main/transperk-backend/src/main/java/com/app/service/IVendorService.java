package com.app.service;


import java.util.List;

import com.app.pojo.Requests;
import com.app.pojo.VehicleDetails;
import com.app.pojo.Vendor;

public interface IVendorService {
	
	String saveVendorDetails(Vendor vendor);
	
	Vendor vendorLogin(String email,String password);
	
	Vendor getVendorById(int id);
	
	Vendor updateVendorDetails(Vendor vendor);
	
	String deleteVendorDetails(int vendorId);
	
	List<Requests> getNewRequestsByVendorId(int vendorId);
	
	List<Requests> getPendingRequestsByVendorId(int vendorId);
	
	List<Requests> getCompleteRequestsByVendorId(int vendorId);
	
	String acceptRequest(int requestId);
	
	String rejectRequest(int requestId);
	
	String completeRequest(int requestId);
	
	String addVehicleDetailsForRequest(int requestId,VehicleDetails vDetails);
	
}
