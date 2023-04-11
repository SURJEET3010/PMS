package com.pms.service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.data.rest.webmvc.json.patch.PatchException;
import org.springframework.stereotype.Service;

import com.pms.model.PatientVisitDetails;
import com.pms.model.PrescriptionDetails;
import com.pms.model.TestDetails;
import com.pms.repositories.PatientVisitRepo;
import com.pms.repositories.PrescriptionRepo;
import com.pms.repositories.TestRepo;

@Service
public class PatientVisitServiceImpl implements PatientVisitService {
	
	@Autowired
	PatientVisitRepo patientRepo;
	
	@Autowired
	TestRepo testRepo;
	
	@Autowired
	PrescriptionRepo prescriptionRepo;
	

	@Override
	public PatientVisitDetails saveVisit(PatientVisitDetails visit) {

		PatientVisitDetails result = patientRepo.save(visit);
		if(result == null) {
			throw new PatchException("visit details data not correct "+result);
			//return null;
		}
		
		return result;
	}

	@Override
	public PatientVisitDetails updateVisit(String visitId,PatientVisitDetails visit) {

		boolean present=patientRepo.existsById(visitId);
		if(present) {                              //if exist
		visit.setVisitId(visitId);
		   return patientRepo.save(visit);
		}else {
			throw new ResourceNotFoundException("Visit Id Not found ");
		}
		
		
	}

	@Override
	public void deleteVisit(String visitId) {
		if(patientRepo.existsById(visitId)) {
			   patientRepo.deleteById(visitId);
			}else {
				throw new ResourceNotFoundException("Visit Id Not found ");
			}

		//patientRepo.deleteById(visitId);
	}

	@Override
	public List<PatientVisitDetails> getAllVisit(String patientId) {
		
		return patientRepo.getAllVisitDetails(patientId);
	}

	
	@Override
	public PatientVisitDetails getRecentVisitDetails(String patientId) {
		return patientRepo.findByVisitDate(patientId);
	}
	
	//=================================Test Service==============================

	@Override
	public TestDetails saveTest(String visitId,TestDetails test) {
		TestDetails status=patientRepo.findById(visitId).map(visit->{
		      test.setVisitDetails(visit);
		      return testRepo.save(test);
		    }).orElseThrow(() -> new ResourceNotFoundException("Not found "));
		
		return status;
		
		//return testRepo.save(tm).getTestName();
	}

	@Override
	public void deleteTest(String testId) {
		if(testRepo.existsById(testId)) {
		testRepo.deleteById(testId);
		}else {
			throw new ResourceNotFoundException("Id Not found ");
		}
	}

//	@Override
//	public TestDetails updateTest(String testId,TestDetails test) {
//		boolean present=testRepo.existsById(testId);
//		if(present) {                              //if exist
//		test.setTestId(testId);
//		return testRepo.save(test);
//		}else {
//			throw new ResourceNotFoundException("Id Not found ");
//		}
//		
//		
//	}

	@Override
	public List<TestDetails> getAllTests(String visitId) {
	
		return testRepo.getAllTests(visitId);
	}
	
	
	
	//===========================Prescription Service===================================

	@Override
	public PrescriptionDetails savePrescription(String visitId,PrescriptionDetails prescription) {
		PrescriptionDetails status=patientRepo.findById(visitId).map(visit->{
		      prescription.setVisitDetails(visit);
		      return prescriptionRepo.save(prescription);
		    }).orElseThrow(() -> new ResourceNotFoundException("Not found "));
		
		return status;
		
		//return prescriptionRepo.save(pd).getPrescriptionName();
	}



	@Override
	public List<PrescriptionDetails> getAllPrescriptions(String visitId) {
		if(visitId!=null) {
		return prescriptionRepo.getPrescriptions(visitId);
		}else {
			throw new ResourceNotFoundException("Data Not found ");
		}
	}

	
	
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//==============================Visit Service======================================

//	@Override
//	public String saveDetails(PatientVisitDetails entity) {
//		entity = patientRepo.save(entity);
//		if(entity.getVisitId() != 0) {
//			return "Details saved";
//		}else {
//			return "Details not saved";
//		}
//	}
//	
//	@Override
//	public List<PatientVisitDetails> viewVisit(){
//		List<PatientVisitDetails> findAll = patientRepo.findAll();
//		return findAll;
//		
//	}
//
//	@Override
//	public PatientVisitDetails patientDetails(Integer pId) {
//		Optional<PatientVisitDetails> id = patientRepo.findById(pId);
//		if(id.isPresent()) {
//			PatientVisitDetails entity= id.get();
//			return entity;
//		}
//		return null;
//	}
//
//	@Override
//	public String deleteDetails(Integer pId) {
//		patientRepo.deleteById(pId);
//		if(pId==0)
//		 return "Not Deleted ";
//		else
//			return "Deleted Successfully";
//	}
//
////==================================for test details =================================================
//	
//	@Override
//	public String saveTestDetails(TestDetails entity) {
//		entity = testRepo.save(entity);
//		if(entity.getTestId() != 0) {
//			return "Test Details saved";
//		}else {
//			return "Test Details not saved";
//		}
//	}
//	
//	@Override
//	public List<TestDetails> viewAllTest(){
//		List<TestDetails> findAll = testRepo.findAll();
//		return findAll;
//	}
//
//	@Override
//	public TestDetails testDetails(Integer tId, TestDetails test) {
//		Optional<TestDetails> id = testRepo.findById(tId);
//		if(id.isPresent()) {
//			test=testRepo.save(test);
//			
//			return test;
//		}
//		return null;	
//		}
//	
//	@Override
//	public TestDetails viewTest(Integer tId) {
//		Optional<TestDetails> id = testRepo.findById(tId);
//		if(id.isPresent()) {
//			TestDetails entity = id.get();
//			
//			return entity;
//		}
//		return null;
//			}
//
//	@Override
//	public String deleteTest(Integer tId) {
//		testRepo.deleteById(tId);
//		return "DeletedSuccessfully";
//	}
//	
//	//==========================Prescription Details ====================================
//
//	@Override
//	public Boolean savePrescription(PrescriptionDetails pd) {
//		PrescriptionDetails entity = new PrescriptionDetails();
//		BeanUtils.copyProperties(pd, entity);
//		entity = prescriptionRepo.save(entity);
//		if(entity.getPrescriptionName() != null) {
//			return true;
//		}else {
//			return false;
//		}
//	}
//	
//	@Override
//	public List<PrescriptionDetails> viewAllPrescription(){
//		List<PrescriptionDetails> findAll = prescriptionRepo.findAll();
//		
//		return findAll;
//	}
//
//	@Override
//	public PrescriptionDetails preDetails(Integer tId) {
//		Optional<PrescriptionDetails> id = prescriptionRepo.findById(tId);
//		if(id.isPresent()) {
//			PrescriptionDetails entity= id.get();
//			return entity;
//		}
//		return null;
//	}
//
//	@Override
//	public String deletePrescription(Integer pd) {
//		prescriptionRepo.deleteById(pd);
//		return "Successfully deleted";
//	}
//
//====================================

//@Override
//public List<PatientVisitDetails> viewAll() {
//	List<PatientVisitDetails> dataList = new ArrayList<>();
//	List<PatientVisitDetails> findAll = patientRepo.findAll();
//	
//	for(PatientVisitDetails entity:findAll) {
//		PatientVisitDetails pf = new PatientVisitDetails();
//		BeanUtils.copyProperties(entity, pf);
//		dataList.add(pf);
//		
//	}
//	return dataList;
//}

