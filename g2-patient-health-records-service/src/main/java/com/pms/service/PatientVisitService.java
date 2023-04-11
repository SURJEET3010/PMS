package com.pms.service;

import java.util.List;
import com.pms.model.PatientVisitDetails;
import com.pms.model.PrescriptionDetails;
import com.pms.model.TestDetails;

public interface PatientVisitService {
	public PatientVisitDetails saveVisit(PatientVisitDetails pvd);
	public PatientVisitDetails updateVisit(String visitId,PatientVisitDetails pvd);
	public void deleteVisit(String pId);
	public List<PatientVisitDetails> getAllVisit(String patientId);
	public PatientVisitDetails getRecentVisitDetails(String patientId);
	
	public TestDetails saveTest(String visitId,TestDetails test);
	public void deleteTest(String testId);
//	public TestDetails updateTest(String testId,TestDetails test);
	public List<TestDetails> getAllTests(String visitId);
	
	
	public PrescriptionDetails savePrescription(String visitId,PrescriptionDetails pm);
	public List<PrescriptionDetails> getAllPrescriptions(String visitId);
	
}
