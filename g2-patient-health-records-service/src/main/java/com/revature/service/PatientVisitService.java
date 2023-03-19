package com.revature.service;

import java.util.List;
import java.util.Optional;

import com.revature.dto.PatientVisitDto;
import com.revature.entities.PatientVisitDetails;
import com.revature.entities.PrescriptionDetails;
import com.revature.entities.TestDetails;

public interface PatientVisitService {
	public Integer saveVisit(PatientVisitDetails pvd);
	public void updateVisit(PatientVisitDetails pvd);
	public void deleteVisit(Integer pId);
	public List<PatientVisitDetails> getAllVisit();
	public Optional<PatientVisitDetails> getOneVisit(Integer pId);
	public boolean isVisitPresent(Integer vid);
	
	public String saveTest(TestDetails tm);
	public void deleteTest(Integer tid);
	public void updateTest(TestDetails tid);
	public List<TestDetails> getAllTests();
	public Optional<TestDetails> getOneTest(Integer tId);
	public boolean isTestPresent(Integer tId);
	
	
	public String savePrescription(PrescriptionDetails pm);
	public void deletePrescription(Integer prid);
	public void updatePrescription(PrescriptionDetails prid);
	public List<PrescriptionDetails> getAllPrescriptions();
	public Optional<PrescriptionDetails> getOnePrescription(Integer prid);
	public boolean isPrescriptionPresent(Integer prid);
	
	public PatientVisitDto createVisitDetails(PatientVisitDto patientVisitDto);
	public PatientVisitDto updateVisitDetials(int patientId, PatientVisitDto patientVisitDto);
	
	
	
	

}
