package com.app.testing;

public class InvalidException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	public InvalidException(String msg){
		super(msg);
	}
}
