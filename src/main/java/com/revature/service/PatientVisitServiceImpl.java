package com.revature.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.bindings.PatientVisitModel;
import com.revature.entities.PatientVisitDetails;
import com.revature.repositories.PatientVisitRepo;
@Service
public class PatientVisitServiceImpl implements PatientVisitService {
	
	@Autowired
	PatientVisitRepo patientRepo;

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
	public List<PatientVisitModel> viewAll() {
		List<PatientVisitModel> dataList = new ArrayList<>();
		List<PatientVisitDetails> findAll = patientRepo.findAll();
		
		for(PatientVisitDetails entity:findAll) {
			PatientVisitModel pf = new PatientVisitModel();
			BeanUtils.copyProperties(entity, pf);
			dataList.add(pf);
			
		}
		return dataList;
	}

	@Override
	public PatientVisitModel editDetails(Integer pId) {
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
	public List<PatientVisitModel> deleteDetails(Integer pId) {
		patientRepo.deleteById(pId);
		return viewAll();
	}

}
