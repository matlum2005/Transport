package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.PaymentDetails;


public interface PaymentDetailRepository extends JpaRepository<PaymentDetails, Integer>{

}
