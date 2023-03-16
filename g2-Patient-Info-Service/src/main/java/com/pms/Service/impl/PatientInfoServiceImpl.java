package com.pms.Service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.Entity.PatientInfo;
import com.pms.Repository.PatientInfoRepository;
import com.pms.Service.PatientInfoService;

@Service
public class PatientInfoServiceImpl implements PatientInfoService {

	@Autowired
	public PatientInfoRepository patientinforepository;

	// Service for insert data ,optional
	@Override
	public PatientInfo saveDetails(PatientInfo patientinfo) {

		return patientinforepository.save(patientinfo);
	}
	
	

	// service for updating patient info
	@Override
	public PatientInfo updateDetails(PatientInfo patientinfo, int Id) {
		PatientInfo pat = patientinforepository.findById(Id).orElse(null);

		pat.setEmail(patientinfo.getEmail());
		pat.setTitle(patientinfo.getTitle());
		pat.setFirstName(patientinfo.getFirstName());
		pat.setLastName(patientinfo.getLastName());
		pat.setDob(patientinfo.getDob());
		pat.setContactNumber(patientinfo.getContactNumber());
		pat.setPassword(patientinfo.getPassword());
		pat.setGender(patientinfo.getGender());
		pat.setLanguagesKnown(patientinfo.getLanguagesKnown());
		pat.setAddress(patientinfo.getAddress());

		return patientinforepository.saveAndFlush(pat);
	}

	// Service for fetching patient info with the help of Id
	@Override
	public List<PatientInfo> getpatientinfo(int Id) {
		List<PatientInfo> patientinfo = null;

		try {
			List<PatientInfo> list = (List<PatientInfo>) this.patientinforepository.findByPatientId(Id);
			return list;
		} catch (Exception e) {
			e.printStackTrace();
		}

		return patientinfo;
	}

	// fetching all the patients info , for admin only
	@Override
	public List<PatientInfo> showAllAvailability() {
		List<PatientInfo> list = (List<PatientInfo>) this.patientinforepository.findAll();
		return list;
	}
}