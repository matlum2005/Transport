package com.app.pojo;

import java.util.*;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Entity
@Table
public class PaymentDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(length = 20,nullable = false)
	private String transactionId;
	@Column(length = 20,nullable = false)
	private Double paidAmount;
	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date paymentDate=new Date();
	@Column(length = 20,nullable = false)
	private PaymentMode paymentMode;
	
	/*
	 * @OneToOne(mappedBy = "payment",cascade = CascadeType.ALL, orphanRemoval =
	 * true)
	 * 
	 * @JsonIgnoreProperties("payment") private Requests request;
	 */
	
	@OneToOne(mappedBy = "payment",cascade = CascadeType.ALL, orphanRemoval = true)
	private Requests request;

	public PaymentDetails(String transactionId, Double paidAmount, Date paymentDate, PaymentMode paymentMode,
			Requests request) {
		super();
		this.transactionId = transactionId;
		this.paidAmount = paidAmount;
		this.paymentDate = paymentDate;
		this.paymentMode = paymentMode;
		this.request = request;
	}

	public PaymentDetails(String transactionId, Double paidAmount, PaymentMode paymentMode) {
		super();
		this.transactionId = transactionId;
		this.paidAmount = paidAmount;
//		this.paymentDate = paymentDate;
		this.paymentMode = paymentMode;
	}	
	
}
