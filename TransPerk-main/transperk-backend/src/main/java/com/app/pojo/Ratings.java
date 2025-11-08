package com.app.pojo;



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
public class Ratings {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(nullable = false)
	private double ratings;
	
	@OneToOne(mappedBy = "ratings")
	@JsonIgnoreProperties("ratings")
	private Requests request;

	public Ratings(double ratings, Requests request) {
		super();
		this.ratings = ratings;
		this.request = request;
	}

	public Ratings(double ratings) {
		super();
		this.ratings = ratings;
	}
	
	//private int request_id;(FK);
	

}
