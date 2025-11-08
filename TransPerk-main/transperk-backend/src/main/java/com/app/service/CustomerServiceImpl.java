package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CustomerRepository;
import com.app.dao.PaymentDetailRepository;
import com.app.dao.RatingsRepository;
import com.app.dao.RequestRepository;
import com.app.dao.VehicleRepository;
import com.app.dao.VendorRepository;
import com.app.pojo.Customer;
import com.app.pojo.PaymentDetails;
import com.app.pojo.Ratings;
import com.app.pojo.RequestStatus;
import com.app.pojo.Requests;
import com.app.pojo.Role;
import com.app.pojo.Vendor;

@Service
@Transactional
public class CustomerServiceImpl implements ICustomerService {
	
	@Autowired
	private CustomerRepository customerRepo;
	
	@Autowired
	private VendorRepository vendorRepo;
	
	@Autowired
	private RequestRepository requestRepo;
	
	@Autowired
	private PaymentDetailRepository paymentRepo;
	
	@Autowired
	private RatingsRepository ratingRepo;
	
	@Override
	public Requests getRequestById(int requestid) {
		
		return requestRepo.findById(requestid).get();
	}

	@Override
	public String saveCustomerDetails(Customer customer) {
		 Customer customerDetails = customerRepo.save(customer);
		return customerDetails.getName()
				+", you have successfully registerd by Email id : "
				 +customerDetails.getEmail();
	}

	@Override
	public Customer customerLogin(String email, String password) {
		
		return customerRepo.findCustomerByEmailAndPassword(email, password);
	}

	@Override
	public Customer getCustomerById(int id) {
		
		return customerRepo.findById(id).get();
	}

	@Override
	public Customer updateCustomerDetails(Customer customer) {
		if(customer.getRole().equals(Role.CUSTOMER)) {
		Customer customerDetails = customerRepo.save(customer);
		return customerDetails;
		}else {
			return null;
		}
	}
	
	@Override
	public String deleteCustomerDetails(int customerId) {
		customerRepo.deleteById(customerId);
		return "Customer Account deleted successfully with id : "+customerId;
	}

	@Override
	public List<Vendor> getVendorByCity(String city) {
		generateVendorRating();
		return vendorRepo.findByCity(city);
	}

	@Override
	public String request(Requests request,int customerId,int vendorId) {
		Customer customer = customerRepo.getById(customerId);
		Vendor vendor = vendorRepo.getById(vendorId);
		request.setCustomer(customer);
		request.setVendor(vendor);
		Requests requestDetails = requestRepo.save(request);
		return "You have Requested successfully by id : "+requestDetails.getId();
	}

	@Override
	public Requests checkRequestStatus(int requestId) {
		Requests requestDetails = requestRepo.findById(requestId).get();
		return requestDetails;
		
	}

	@Override
	public String updateRequestDetails(Requests request) {
		if(request.getVDetails()==null) {
		Requests requestDetails = requestRepo.save(request);
		
		return "Request updated successfully for Request id : "+requestDetails.getId();
		}else {
			return "Request is already processed!!";
		}
	}

	@Override
	public String deleteRequest(int requestId) {
		requestRepo.deleteRequestById(requestId);
		return "Request Deleted successfully with id : "+requestId;
	}
	
	@Override
	public String makeRequestPayment(int requestId, PaymentDetails payment) {
		Requests request = getRequestById(requestId);
		if(request.getPayment()==null) {
			if(request.getVDetails()!=null) {
		paymentRepo.save(payment);
		request.setPayment(payment);
		requestRepo.save(request);
		return "payment is successfull with transaction Id : "+request.getPayment().getTransactionId();
		}else {
			return "Sorry !! Transaction in Progress";
		}
			}else {
			return "payment already done !!!";
		}
	}
	

	@Override
	public String requestRating(int requestId,Ratings rating) {
		
		if(rating.getRatings() < 1 && rating.getRatings() > 5) {
			return  "Invalid Ratings";
		}else {
			Requests request = getRequestById(requestId);
			if( request.getRatings()==null) {
			if(request.getPayment()!=null) {
			//Ratings ratings = new Ratings(rating);
			ratingRepo.save(rating);
			request.setRatings(rating);
			requestRepo.save(request);
			return "you have rated our service by : "+rating.getRatings()+" out of 5.0";
			}else {
				return "Transaction still in progress!!";
			}}else {
				return "Rating already done !!!";
			}
		}
	}
	//@SuppressWarnings("unlikely-arg-type")
	@Override
	public void generateVendorRating() {
		/*
		 * List<Requests> requests = requestRepo.findAll(); List<Vendor> vendors =
		 * vendorRepo.findAll(); //Vendor vendor = vendorRepo.getById(vendorId);
		 * 
		 * 
		 * for (int i=0;i<vendors.size();i++) { int total = 0; int counter=0;
		 * if(vendors.get(i).getRequests()!=null) { for (int j=0;j<requests.size();j++)
		 * {
		 * 
		 * if(requests.get(j).getVendor().equals(vendors.get(i).getRequests())) {
		 * if(requests.get(j).getRatings()!=null) {
		 * total+=requests.get(j).getRatings().getRatings(); } counter+=1; }
		 * 
		 * } total=total/counter; vendors.get(i).setVendorRating(total);
		 * vendorRepo.save(vendors.get(i));
		 * 
		 * }else { vendors.get(i).setVendorRating(0); vendorRepo.save(vendors.get(i)); }
		 * }
		 */
		
	}

	@Override
	public List<Requests> getRequestByCustomerId(int customerId) {
		
		return requestRepo.findRequestsByCustomerId(customerId);
	}

	
}


