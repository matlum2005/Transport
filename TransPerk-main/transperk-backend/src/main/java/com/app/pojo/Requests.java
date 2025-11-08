package com.app.pojo;

import java.time.LocalDate;
import java.util.*;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.ColumnDefault;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@NoArgsConstructor
//@AllArgsConstructor
@Setter
@Getter
@ToString
@Entity
@Table
public class Requests {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(length = 20,nullable = false)
	private String pickUp;
	@Column(length = 20,nullable = false)
	private String destination;
	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date requestDate=new Date();
	@Column(length = 20 ,nullable = false)
	private TruckType truckType;
	@Column(length = 20 ,nullable = false)
	//@ColumnDefault(value = "REQUESTED")
	private RequestStatus requestStatus;
	@Column(length = 20,nullable = false)
	private String goodsType;
	
	@ManyToOne(  /* fetch = FetchType.LAZY */)
	@JoinColumn(name = "cid") // to specify name of the FK column
	@JsonIgnoreProperties("requests")
	private Customer customer;
	
	@ManyToOne(/* fetch = FetchType.LAZY */)
	@JoinColumn(name = "vid") // to specify name of the FK column
	@JsonIgnoreProperties("requests")
	private Vendor vendor;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JsonIgnoreProperties("request")
	@JoinColumn(name = "vDid")
	private VehicleDetails vDetails;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JsonIgnoreProperties("request")
	@JoinColumn(name = "rid")
	private Ratings ratings;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "pid")
	@JsonIgnoreProperties("request")
	private PaymentDetails payment;

	/*
	 * public Requests(String pickUp, String destination, Date requestDate,
	 * TruckType truckType, RequestStatus requestStatus, String goodsType, Customer
	 * customer, Vendor vendor, VehicleDetails vDetails, Ratings ratings,
	 * PaymentDetails payment) { super(); this.pickUp = pickUp; this.destination =
	 * destination; this.requestDate = requestDate; this.truckType = truckType;
	 * this.requestStatus = requestStatus; this.goodsType = goodsType; this.customer
	 * = customer; this.vendor = vendor; this.vDetails = vDetails; this.ratings =
	 * ratings; this.payment = payment; }
	 */
	/*
	 * public Requests(String pickUp, String destination, Date requestDate,
	 * TruckType truckType, RequestStatus requestStatus, String goodsType, Customer
	 * customer, Vendor vendor) { super(); this.pickUp = pickUp; this.destination =
	 * destination; this.requestDate = requestDate; this.truckType = truckType;
	 * this.requestStatus = requestStatus; this.goodsType = goodsType; this.customer
	 * = customer; this.vendor = vendor; }
	 */
	public Requests(String pickUp, String destination, TruckType truckType,
			RequestStatus requestStatus, String goodsType) {
		super();
		this.pickUp = pickUp;
		this.destination = destination;
//		this.requestDate = requestDate;
		this.truckType = truckType;
		this.requestStatus = requestStatus;
		this.goodsType = goodsType;
		
	}

	public Requests(Integer id, PaymentDetails payment) {
		super();
		this.id = id;
		this.payment = payment;
	}

	/*
	 * public Requests(String pickUp, String destination, Date requestDate,
	 * TruckType truckType, RequestStatus requestStatus, String goodsType) {
	 * super(); this.pickUp = pickUp; this.destination = destination;
	 * this.requestDate = requestDate; this.truckType = truckType;
	 * this.requestStatus = requestStatus; this.goodsType = goodsType; }
	 */
	
	
	
	
	
	

}
