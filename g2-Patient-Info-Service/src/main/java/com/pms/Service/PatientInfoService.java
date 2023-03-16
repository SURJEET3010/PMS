package com.pms.Service;

import java.util.List;

import com.pms.Entity.PatientInfo;

public interface PatientInfoService {

	public PatientInfo saveDetails(PatientInfo patientinfo);

	public PatientInfo updateDetails(PatientInfo patientinfo, int Id);

	public List<PatientInfo> getpatientinfo(int Id);

	public List<PatientInfo> showAllAvailability();

}
