package com.revature.service;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.bindings.PatientVisitModel;
import com.revature.bindings.PrescriptionModel;
import com.revature.bindings.TestModel;
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
	
	
	//==============================Visit Service======================================

	@Override
	public String saveDetails(PatientVisitModel pvm) {
		PatientVisitDetails entity = new PatientVisitDetails();
		BeanUtils.copyProperties(pvm, entity);
		entity = patientRepo.save(entity);
		if(entity.getVisitId() != 0) {
			return "Details saved";
		}else {
			return "Details not saved";
		}
	}

	@Override
	public PatientVisitModel patientDetails(Integer pId) {
		Optional<PatientVisitDetails> id = patientRepo.findById(pId);
		if(id.isPresent()) {
			PatientVisitDetails entity= id.get();
			PatientVisitModel pf = new PatientVisitModel();
			BeanUtils.copyProperties(entity, pf);
			return pf;
		}
		return null;
	}

	@Override
	public String deleteDetails(Integer pId) {
		patientRepo.deleteById(pId);
		return "DeletedSuccessfully";
	}

//==================================for test details =================================================
	
	@Override
	public String saveTestDetails(TestModel tm) {
		TestDetails entity = new TestDetails();
		BeanUtils.copyProperties(tm, entity);
		entity = testRepo.save(entity);
		if(entity.getTestId() != 0) {
			return "Test Details saved";
		}else {
			return "Test Details not saved";
		}
	}

	@Override
	public TestModel testDetails(Integer tId) {
		Optional<TestDetails> id = testRepo.findById(tId);
		if(id.isPresent()) {
			TestDetails entity= id.get();
			TestModel tf = new TestModel();
			BeanUtils.copyProperties(entity, tf);
			return tf;
		}
		return null;	
		}

	@Override
	public String deleteTest(Integer tId) {
		testRepo.deleteById(tId);
		return "DeletedSuccessfully";
	}
	
	//==========================Prescription Details ====================================

	@Override
	public boolean savePrescription(PrescriptionDetails pd) {
		PrescriptionDetails entity = new PrescriptionDetails();
		BeanUtils.copyProperties(pd, entity);
		entity = prescriptionRepo.save(entity);
		if(entity.getPrescriptionId() != 0) {
			return true;
		}else {
			return false;
		}
	}

	@Override
	public PrescriptionModel preDetails(Integer tId) {
		Optional<PrescriptionDetails> id = prescriptionRepo.findById(tId);
		if(id.isPresent()) {
			PrescriptionDetails entity= id.get();
			PrescriptionModel pf = new PrescriptionModel();
			BeanUtils.copyProperties(entity, pf);
			return pf;
		}
		return null;
	}

	@Override
	public String deletePrescription(Integer pd) {
		prescriptionRepo.deleteById(pd);
		return "Successfully deleted";
	}


	
}








//@Override
//public List<PatientVisitModel> viewAll() {
//	List<PatientVisitModel> dataList = new ArrayList<>();
//	List<PatientVisitDetails> findAll = patientRepo.findAll();
//	
//	for(PatientVisitDetails entity:findAll) {
//		PatientVisitModel pf = new PatientVisitModel();
//		BeanUtils.copyProperties(entity, pf);
//		dataList.add(pf);
//		
//	}
//	return dataList;
//}

