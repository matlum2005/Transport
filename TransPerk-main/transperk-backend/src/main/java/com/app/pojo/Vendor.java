package com.app.pojo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class Vendor{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "vendor_id")
	private Integer id;
	@Column(length = 20, nullable = false)
	private String password;
	@Column(name="email_id",unique = true, nullable = false)
	private String email;
	@Column(length=20,nullable = false)
	private Role role;
	@Column(length = 20,nullable = false)
	private String name;
	@Column(length = 50,nullable = false)
	private String address;
	@Column(length = 15, nullable = false)
	private String phoneNo;
	@Column(length = 20,nullable = false)
	private String city;
	@Column(length = 20,nullable = false)
	private String state;
	@Column(length = 10,nullable = false)
	private String postalCode;
//	@Column(length = 10,nullable = true)
//	private int vendorRating = 0;
	
	@OneToMany(mappedBy = "vendor",
			cascade = CascadeType.REMOVE, /* orphanRemoval = true, */fetch = FetchType.EAGER)//mappedBy : mandatory , MUST appear in inverse side,
	//value --- name of the property as it appears on the owning side.
	//@JsonIgnoreProperties("vendor")
	@JsonIgnore
	private List<Requests> requests = new ArrayList<>();

	public Vendor(String password, String email, Role role, String name, String address, String phoneNo, String city,
			String state, String postalCode/* , int vendorRating */) {
		super();
		this.password = password;
		this.email = email;
		this.role = role;
		this.name = name;
		this.address = address;
		this.phoneNo = phoneNo;
		this.city = city;
		this.state = state;
		this.postalCode = postalCode;
//		this.vendorRating = vendorRating;
	}
	
	
}
