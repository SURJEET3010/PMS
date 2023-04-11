package com.pms.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.pms.model.PatientVisitDetails;
import com.pms.repositories.PatientVisitRepo;
import com.pms.repositories.PrescriptionRepo;
import com.pms.repositories.TestRepo;

@ExtendWith(MockitoExtension.class)
public class PatientVisitServiceImplTest {
	
	@InjectMocks
	PatientVisitServiceImpl service;
	@Mock
	PatientVisitRepo visitRepo;
	@Mock
	TestRepo testRepo;
	@Mock
	PrescriptionRepo precriptionRepo;
	
	@Test
	public void getAllVisits() {
		PatientVisitDetails t1 = new PatientVisitDetails();
		  PatientVisitDetails t2 = new PatientVisitDetails();
		  PatientVisitDetails t3 = new PatientVisitDetails();
		  
	      List<PatientVisitDetails> records = Arrays.asList(t1,t2,t3);
	      when(visitRepo.getAllVisitDetails("1P")).thenReturn(records);
	      
	      List<PatientVisitDetails> list=service.getAllVisit("1P");
	      assertEquals(3,list.size());	
	      verify(visitRepo,times(1)).getAllVisitDetails("1P");
	}
	
	@Test
	public void createVisit() {
		//PatientVisitDetails visit= new PatientVisitDetails("PHR101","1P",5.7f,70f,80,120,98.6f,72,"A+","1AP","fever",null,LocalDate.now(),null);
		
	
	}
	
	
	}
