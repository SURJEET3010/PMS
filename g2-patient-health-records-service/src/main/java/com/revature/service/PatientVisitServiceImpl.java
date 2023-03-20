package com.revature.service;


import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dto.PatientVisitDto;
import com.revature.entities.PatientVisitDetails;
import com.revature.entities.PrescriptionDetails;
import com.revature.entities.TestDetails;
import com.revature.repositories.PatientVisitRepo;
import com.revature.repositories.PrescriptionRepo;
import com.revature.repositories.TestRepo;

@Service
public class PatientVisitServiceImpl implements PatientVisitService {
	
	@Autowired
	PatientVisitRepo patientRepo;
	
	@Autowired
	TestRepo testRepo;
	
	@Autowired
	PrescriptionRepo prescriptionRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public Integer saveVisit(PatientVisitDetails pvd) {

		return patientRepo.save(pvd).getVisitId();
	}

	@Override
	public void updateVisit(PatientVisitDetails pvd) {

		patientRepo.save(pvd);
		
	}

	@Override
	public void deleteVisit(Integer visitId) {

		patientRepo.deleteById(visitId);
		testRepo.deleteTestById(visitId);
		prescriptionRepo.deletePrescriptionById(visitId);
	}

	@Override
	public List<PatientVisitDetails> getAllVisit() {
		
		return patientRepo.findAll();
	}

	@Override
	public Optional<PatientVisitDetails> getOneVisit(Integer visitId) {
	
		return patientRepo.findById(visitId);
	}

	@Override
	public boolean isVisitPresent(Integer vid) {
		
		return patientRepo.existsById(vid);
	}
	
	//=================================Test Service==============================

	@Override
	public String saveTest(TestDetails tm) {
		
		return testRepo.save(tm).getTestName();
	}

	@Override
	public void deleteTest(Integer tid) {
		testRepo.deleteById(tid);
		
	}

	@Override
	public void updateTest(TestDetails tid) {
		testRepo.save(tid);
		
	}

	@Override
	public List<TestDetails> getAllTests() {
	
		return testRepo.findAll();
	}

	@Override
	public Optional<TestDetails> getOneTest(Integer tId) {
		
		return testRepo.findById(tId);
	}

	@Override
	public boolean isTestPresent(Integer tId) {
		
		return testRepo.existsById(tId);
	}
	
	//===========================Prescription Service===================================

	@Override
	public String savePrescription(PrescriptionDetails pm) {
		
		return prescriptionRepo.save(pm).getPrescriptionName();
	}

	@Override
	public void deletePrescription(Integer prid) {
		
		prescriptionRepo.deleteById(prid);
		
	}

	@Override
	public void updatePrescription(PrescriptionDetails prd) {
		
		prescriptionRepo.save(prd);
		
	}

	@Override
	public List<PrescriptionDetails> getAllPrescriptions() {
		
		return prescriptionRepo.findAll();
	}

	@Override
	public Optional<PrescriptionDetails> getOnePrescription(Integer prid) {
		
		return prescriptionRepo.findById(prid);
	}

	@Override
	public boolean isPrescriptionPresent(Integer prid) {
	
		return prescriptionRepo.existsById(prid);
	}
	
	
	//=================================DTO Servive==========================
	
	
	@Override
	public PatientVisitDto createVisitDetails(PatientVisitDto patientVisitDto)
	{
		modelMapper.getConfiguration().setAmbiguityIgnored(true);
		PatientVisitDetails visitHistory=modelMapper.map(patientVisitDto, PatientVisitDetails.class);
		PatientVisitDetails savedVisit=patientRepo.save(visitHistory);
		PatientVisitDto savedVisitDto=modelMapper.map(savedVisit, PatientVisitDto.class);
		return savedVisitDto;
		
	}


	@Override
	public PatientVisitDto updateVisitDetials(int patientId, PatientVisitDto patientVisitDto) 
	{
		PatientVisitDetails existingVisit=patientRepo.findById(patientId).get();
		existingVisit.setHeight(patientVisitDto.getHeight());
		existingVisit.setWeight(patientVisitDto.getWeight());
		existingVisit.setBpDiastolic(patientVisitDto.getBPdiastolic());
		existingVisit.setBpSystollic(patientVisitDto.getBPsystolic());
		existingVisit.setBodyTemperature(patientVisitDto.getBodyTemperature());
		existingVisit.setRespirationRate(patientVisitDto.getRepirationRate());
		existingVisit.setKeyNotes(patientVisitDto.getKeyNotes());
		
		PatientVisitDetails updatedVisitDetails=patientRepo.save(existingVisit);
		patientVisitDto=modelMapper.map(updatedVisitDetails,PatientVisitDto.class);
		return patientVisitDto;
		
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

