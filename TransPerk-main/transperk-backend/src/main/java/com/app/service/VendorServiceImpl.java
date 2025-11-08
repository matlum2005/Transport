package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.RequestRepository;
import com.app.dao.VehicleRepository;
import com.app.dao.VendorRepository;
import com.app.pojo.RequestStatus;
import com.app.pojo.Requests;
import com.app.pojo.Role;
import com.app.pojo.VehicleDetails;
import com.app.pojo.Vendor;
@Service
@Transactional
public class VendorServiceImpl implements IVendorService {
	
	@Autowired
	private VendorRepository vendorRepo;
	
	@Autowired
	private RequestRepository requestRepo;
	
	@Autowired
	private VehicleRepository vehicleRepo;

	@Override
	public String saveVendorDetails(Vendor vendor) {
		Vendor vendorDetails = vendorRepo.save(vendor);
		return vendorDetails.getName()
				+", you have successfully registerd by Email id : "
				 +vendorDetails.getEmail();
	}

	@Override
	public Vendor vendorLogin(String email, String password) {
		
		return vendorRepo.findVendorByEmailAndPassword(email, password);
	}

	@Override
	public Vendor getVendorById(int id) {
		
		return vendorRepo.findById(id).get();
	}

	@Override
	public Vendor updateVendorDetails(Vendor vendor) {
		if(vendor.getRole().equals(Role.VENDOR)) {
		Vendor vendorDetails = vendorRepo.save(vendor);
		return vendorDetails;
		}else {
			return null;
		}
	}

	@Override
	public String deleteVendorDetails(int vendorId) {
		
		vendorRepo.deleteById(vendorId);
		return "Vendor Account deleted successfully with id : "+vendorId;
	}

	@Override
	public List<Requests> getNewRequestsByVendorId(int vendorId) {
		
		return requestRepo.findNewRequestsByVendorId(vendorId);
	}
	@Override
	public List<Requests> getPendingRequestsByVendorId(int vendorId) {
		
		return requestRepo.findPendingRequestsByVendorId(vendorId);
	}

	@Override
	public List<Requests> getCompleteRequestsByVendorId(int vendorId) {
		
		return requestRepo.findCompleteRequestsByVendorId(vendorId);
	}


	@Override
	public String acceptRequest(int requestId) {
		Requests request = requestRepo.findById(requestId).get();
		if(request.getRequestStatus().equals(RequestStatus.REQUESTED)) {
		request.setRequestStatus(RequestStatus.ACCEPTED);
		requestRepo.save(request);
		return "Request Accepted !!!";
		}else if(request.getRequestStatus().equals(RequestStatus.ACCEPTED)) {
			return "Request already accepted!!!";
		}else if(request.getRequestStatus().equals(RequestStatus.INPROGRESS) || request.getRequestStatus().equals(RequestStatus.COMPLETED)) {
			return "Request already Processed !!!";
		}else {
		return "Request already declined !!!";
		}
		
	}

	@Override
	public String rejectRequest(int requestId) {
		
		Requests request = requestRepo.findById(requestId).get();
		if(request.getRequestStatus().equals(RequestStatus.REQUESTED)) {
		request.setRequestStatus(RequestStatus.DECLINED);
		requestRepo.save(request);
		return "Request Declined ,we will get back to you!!!";
		}else {
			return "request already completed or declined !!!";
		}
	}

	@Override
	public String completeRequest(int requestId) {
		
		Requests request = requestRepo.findById(requestId).get();
		
		if(request.getRequestStatus().equals(RequestStatus.INPROGRESS)) {
			if(request.getPayment()!=null) {
		request.setRequestStatus(RequestStatus.COMPLETED);
		requestRepo.save(request);
		return "Request Completed !!!";
		}else {
			return "payment is pending!!!";
		}
		}else {
			return "request not InProgress !!!";
		}
	}

	@Override
	public String addVehicleDetailsForRequest(int requestId,VehicleDetails vDetails) {
		Requests request = requestRepo.findById(requestId).get();
		if(request.getVDetails()==null) {
		if(request.getRequestStatus().equals(RequestStatus.ACCEPTED)) {
		//request.setRequestStatus(RequestStatus.INPROGRESS);
		vehicleRepo.save(vDetails);
		request.setVDetails(vDetails);
		request.setRequestStatus(RequestStatus.INPROGRESS);
		requestRepo.save(request);
		
		return "Vehicle Details are updated successfully with Id : "+request.getVDetails().getId();
		}else {
			if(request.getRequestStatus().equals(RequestStatus.REQUESTED)){
				return "You need to Accept the Request for further processing !!!";
			}else if(request.getRequestStatus().equals(RequestStatus.DECLINED)) {
				return "This request is already closed !!!";
			}
			
		}
		}else {
			return "Vehicle Already Allocated !!!";
		}
		
		return "Error Occured";
		
	}


}
