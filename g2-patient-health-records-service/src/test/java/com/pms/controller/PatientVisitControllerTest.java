package com.pms.controller;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pms.model.PatientVisitDetails;
import com.pms.model.PrescriptionDetails;
import com.pms.model.TestDetails;
import com.pms.repositories.PatientVisitRepo;
import com.pms.service.PatientVisitService;

@WebMvcTest(PatientVisitRestController.class)
public class PatientVisitControllerTest {
	@Autowired
    MockMvc mockMvc;
   
	@Autowired
    ObjectMapper mapper;
	
	@MockBean
	PatientVisitRepo repo;
    
    @MockBean
    PatientVisitService service;
    
    //Post method for visit details
    @Test   
  public void createRecord_success() throws Exception {
      PatientVisitDetails visit = PatientVisitDetails.builder()
              .visitId("PHR101")
              .patientId("1A")
              .height(5.7f)
              .weight(70f)
              .bpSystollic(80)
              .bpDiastolic(120)
              .bodyTemperature(98.6f)
              .respirationRate(72)
              .bloodGroup("AB+")
              .appointmentId("1AP")
              .keyNotes("Fever")
              .allergy(null)
              .createdDate(LocalDate.now())
              .lastModifiedDate(null)
              .build();

      Mockito.when(service.saveVisit(visit)).thenReturn(visit);

      MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/api/v1/visit/1A")
              .contentType(MediaType.APPLICATION_JSON)
              .accept(MediaType.APPLICATION_JSON)
              .content(this.mapper.writeValueAsString(visit));

      mockMvc.perform(mockRequest)
              .andExpect(status().is(201))
              .andExpect(jsonPath("$", notNullValue()))
              .andExpect(jsonPath("$.keyNotes", is("Fever")));
      }
    
    
    //GET method for visit details
  @Test
  public void getAllVisits_success() throws Exception {
	  
	  PatientVisitDetails t1 = new PatientVisitDetails();
	  PatientVisitDetails t2 = new PatientVisitDetails();
	  PatientVisitDetails t3 = new PatientVisitDetails();
	  
      List<PatientVisitDetails> records = Arrays.asList(t1,t2,t3);
      
      Mockito.when(service.getAllVisit("P1")).thenReturn(records);
      
      mockMvc.perform(MockMvcRequestBuilders
              .get("/api/v1/visit/allvisits/P1")
              .contentType(MediaType.APPLICATION_JSON))
              .andExpect(status().isOk())
              .andExpect(jsonPath("$", notNullValue()));
  }
  //Test for getting recent details
  @Test
 public void getOneVisit_success() throws Exception {
	  
	  PatientVisitDetails t1 = new PatientVisitDetails();
	  
//      List<PatientVisitDetails> records = Arrays.asList(t1,t2,t3);
      
      Mockito.when(service.getRecentVisitDetails("P1")).thenReturn(t1);
      
      mockMvc.perform(MockMvcRequestBuilders
              .get("/api/v1/visit/recent/P1")
              .contentType(MediaType.APPLICATION_JSON))
              .andExpect(status().isOk())
              .andExpect(jsonPath("$", notNullValue()));
  }
  // test for recent visit failure 
  @Test
public void getOneVisit_failure() throws Exception {
	  
      
      Mockito.when(service.getRecentVisitDetails("P1")).thenReturn(null);
      
      mockMvc.perform(MockMvcRequestBuilders
              .get("/api/v1/visit/recent/P1")
              .contentType(MediaType.APPLICATION_JSON))
              .andExpect(status().isBadRequest())
              .andExpect(content().string("Data not found"));
  }
  
   
  //GET method for null value
  @Test
  public void getAllVisits_failure() throws Exception {
      
      Mockito.when(service.getAllVisit("P1")).thenReturn(null);
      
      mockMvc.perform(MockMvcRequestBuilders
              .get("/api/v1/visit/allvisits/P1")
              .contentType(MediaType.APPLICATION_JSON))
              .andExpect(status().isNoContent())
              .andExpect(content().string("No Data Found"));
  }
  //delete visit success
  @Test
  public void deleteVisit_success() throws Exception{
	  PatientVisitDetails t1 = new PatientVisitDetails();
	  t1.setVisitId("1V");
	  
	  mockMvc.perform(MockMvcRequestBuilders
              .delete("/api/v1/visit/1V")
              .contentType(MediaType.APPLICATION_JSON))
              .andExpect(status().isAccepted())
              .andExpect(content().string("Visit Deleted"));
	  
  }
  
//  delete visit failure
//  @Test
//  public void deleteVisit_failure() throws Exception{
//	  
//	  //PatientVisitDetails t1 = new PatientVisitDetails(); 
//	  mockMvc.perform(MockMvcRequestBuilders
//              .delete("/api/v1/visit/1V")
//              .contentType(MediaType.APPLICATION_JSON))
//	          .andExpect(status().isBadRequest())
//              //.andExpect(content().string("VisitId not found"))
//              .andExpect(result->assertTrue(result.getResolvedException() instanceof ResourceNotFoundException))
//              .andExpect(result->assertEquals("Visit Id Not found ", result.getResolvedException().getMessage()));
//	  
//  }
//  
  
  
    
    //Testing GET method of Test details
    @Test
    public void getAllTests_success() throws Exception {
    	
    	 TestDetails t1 = new TestDetails("1T", "Sugar Test", "Positive","Fever");
    	 TestDetails t2 = new TestDetails("2T", "WBCs", "Negative","Malaria");
    	 TestDetails t3 = new TestDetails("3T", "Blood Test", "Negative","Typhoid");

        List<TestDetails> records = Arrays.asList(t1,t2,t3);
        
        Mockito.when(service.getAllTests("1V")).thenReturn(records);
        
        mockMvc.perform(MockMvcRequestBuilders
                .get("/api/v1/visit/test/1V")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", notNullValue()))
                .andExpect(jsonPath("$[2].testName", is("Blood Test")));
    }
    
    //GET method for null value   
    @Test
    public void getAllTest_failure() throws Exception {
        
        Mockito.when(service.getAllTests("1V")).thenReturn(null);
        
        mockMvc.perform(MockMvcRequestBuilders
                .get("/api/v1/visit/test/1V")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNoContent())
                .andExpect(content().string("No Data Found"));
    }
    
    
    
    //POST method of test details
    @Test
    public void createTest_success() throws Exception {
        TestDetails record =  TestDetails.builder()
        		.testId("T1")
                .testName("Sugar test")
                .result("positive")
                .notes("low sugar level")
                .build();

        Mockito.when(service.saveTest("1V", record)).thenReturn(record);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/api/v1/visit/test/1V")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(record));

        mockMvc.perform(mockRequest)
                .andExpect(status().is(201))
                .andExpect(jsonPath("$", notNullValue()))
                .andExpect(jsonPath("$.testName", is("Sugar test")));
        }
    
    
  //delete Test success
    @Test
    public void deleteTest_success() throws Exception{
  	  TestDetails t1 = new TestDetails();
  	  t1.setTestId("1T");
  	  
  	  mockMvc.perform(MockMvcRequestBuilders
                .delete("/api/v1/visit/test/1V")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isAccepted())
                .andExpect(content().string("Deleted test successfully"));
  	  
    }
    
    
    //GET method of prescriptions success
    @Test
    public void getAllPrescription_success() throws Exception {
    	 PrescriptionDetails p1 = new PrescriptionDetails("1P", "Ranban", "1-1-1","Fever");
    	 PrescriptionDetails p2 = new PrescriptionDetails("2P", "Disprin", "1-0-1","Malaria");
    	 PrescriptionDetails p3 = new PrescriptionDetails("3P", "Paracetamol", "0-0-1","Typhoid");
        List<PrescriptionDetails> records2 = new ArrayList<>(Arrays.asList(p1, p2, p3));
        
        Mockito.when(service.getAllPrescriptions("1V")).thenReturn(records2);
        
        mockMvc.perform(MockMvcRequestBuilders
                .get("/api/v1/visit/prescription/1V")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", notNullValue()))
                .andExpect(jsonPath("$[2].prescriptionName", is("Paracetamol")));
    }
    
    //GET method for prescriptions failure
    
    @Test
    public void getAllPrescription_failure() throws Exception {
        
        Mockito.when(service.getAllPrescriptions("1V")).thenReturn(null);
        
        mockMvc.perform(MockMvcRequestBuilders
                .get("/api/v1/visit/prescription/1V")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNoContent())
                .andExpect(content().string("No Data Found"));
    }
    
    //POST method of prescriptions
    @Test
    public void createPrescription_success() throws Exception {
        PrescriptionDetails presc = PrescriptionDetails.builder()
                .prescriptionName("Disprin")
                .dosage("1-0-1")
                .notes("low sugar level")
                .build();

        Mockito.when(service.savePrescription("1V",presc)).thenReturn(presc);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/api/v1/visit/prescription/1V")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(presc));

        mockMvc.perform(mockRequest)
                .andExpect(status().is(201))
                .andExpect(jsonPath("$", notNullValue()));
        }
	
	}
