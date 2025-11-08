package com.app.pojo;

import java.util.*;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;


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
public class VehicleDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(nullable = false)
	private Date deliveryDate;
	@Column(length = 20,nullable = false)
	private String driverName;
	@Column(length = 20,nullable = false)
	private String truckNo;
	@Column(length = 15,nullable = false)
	private String driverPhone;
	
	//private int requestId;(FK)
	@OneToOne(mappedBy = "vDetails")
	@JsonIgnoreProperties("vDetails")
	private Requests request;

	public VehicleDetails(Date deliveryDate, String driverName, String truckNo, String driverPhone, Requests request) {
		super();
		this.deliveryDate = deliveryDate;
		this.driverName = driverName;
		this.truckNo = truckNo;
		this.driverPhone = driverPhone;
		this.request = request;
	}

	public VehicleDetails(Date deliveryDate, String driverName, String truckNo, String driverPhone) {
		super();
		this.deliveryDate = deliveryDate;
		this.driverName = driverName;
		this.truckNo = truckNo;
		this.driverPhone = driverPhone;
	}
	
	
	

}
