package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojo.PaymentDetails;
import com.app.pojo.RequestStatus;
import com.app.pojo.Requests;

public interface RequestRepository extends JpaRepository<Requests, Integer>{
	
	 
//	 @Query(value ="insert into Requests(ratingId) VALUES (:rId)",nativeQuery = true)
//	Requests saveRatingDetails(@Param("rId")int rId);
	
	List<Requests> findRequestsByVendorId(int vendorId);
	
	@Modifying
	@Query(value ="delete from Requests r where r.id =:rId",nativeQuery = true)
	void deleteRequestById(@Param("rId")int rId);
	
	@Modifying
	@Query(value ="select * from Requests where vid =:vid and request_status=0",nativeQuery = true)
	List<Requests> findNewRequestsByVendorId(@Param("vid")int vid);
	
	@Modifying
	@Query(value ="select * from Requests where vid =:vid and request_status=1 or request_status=2",nativeQuery = true)
	List<Requests> findPendingRequestsByVendorId(@Param("vid")int vid);
	
	@Modifying
	@Query(value ="select * from Requests where vid =:vid and request_status=3 or request_status=4",nativeQuery = true)
	List<Requests> findCompleteRequestsByVendorId(@Param("vid")int vid);
	
	List<Requests> findRequestsByCustomerId(int customerId);
	
	List<Requests> findAll();

}
