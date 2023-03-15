package com.revature.service;

import com.revature.bindings.PatientVisitModel;
import com.revature.bindings.PrescriptionModel;
import com.revature.bindings.TestModel;
import com.revature.entities.PrescriptionDetails;

public interface PatientVisitService {
	public String saveDetails(PatientVisitModel pvm);
	public PatientVisitModel patientDetails(Integer pId);
	public String deleteDetails(Integer pId);
	
	public String saveTestDetails(TestModel tm);
	public TestModel testDetails(Integer tId);
	public String deleteTest(Integer tId);
	
	public boolean savePrescription(PrescriptionDetails pd);
	public PrescriptionModel preDetails(Integer tId);
	public String deletePrescription(Integer pd);
	
	

}
