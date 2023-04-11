package com.pms.exception;


public class PatientVisitException extends Exception {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public PatientVisitException(String message) {
		super(message);
	}

	public PatientVisitException(String message, Throwable cause) {
		super(message, cause);
	}

	public PatientVisitException(Throwable cause) {
		super(cause);
	}


}

