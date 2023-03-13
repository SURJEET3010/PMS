package com.revature.service;

import java.util.List;
import com.revature.bindings.PatientVisitModel;

public interface PatientVisitService {
	public String saveDetails(PatientVisitModel pvm);
	public List<PatientVisitModel> viewAll();
	public PatientVisitModel editDetails(Integer pId);
	public List<PatientVisitModel> deleteDetails(Integer pId);

}
