package com.pms.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.pms.Entity.Appointment;
import com.pms.Repository.AppointmentRepository;


@Service
public class AppointmentService {

		@Autowired
		private AppointmentRepository appointmentrepository;
		
		//for adding
		public Appointment saveDetails(Appointment appointment) {
			
			  return appointmentrepository.save(appointment);
		}
			  
		
		//for delete
		public boolean deleteDetails(Long appointmentId) {
			boolean bool = appointmentrepository.existsById(appointmentId);
			
			if(bool != true) {
				return bool;
			}
			
			appointmentrepository.deleteById(appointmentId);;
			System.out.println("item deleted");	
			return bool;

		}
		
		
		//for updating
		public Appointment updateDetails(Appointment appointment ,Long appointmentId) {
			Appointment app =	appointmentrepository.findById(appointmentId).orElse(null);	
			app.setAcceptance(appointment.getAcceptance());
			app.setDate(appointment.getDate());
			app.setPhysicianEmail(appointment.getPhysicianEmail());
			app.setReason(appointment.getReason());
			app.setSubmissionDate(appointment.getSubmissionDate());
				  return appointmentrepository.saveAndFlush(app);
			
			}
		
		//for fetching with patiendId , only for patient
		public List<Appointment> getAppointment(int patientId) {
			List<Appointment> appointment = null;

			try {
				List<Appointment> list = (List<Appointment>) this.appointmentrepository.findAppointmentByPatientId(patientId);
				return list;
			} catch (Exception e) {
				e.printStackTrace();
			}

			return appointment;
		}
		
		//for fetching with physicianEmail and acceptance and date , only for physician
		public List<Appointment> showAvailability(String physicianEmail , String date , String acceptance) {
			List<Appointment> app = null;

			try {
				List<Appointment> list = (List<Appointment>) this.appointmentrepository.findAppointment(physicianEmail, date, acceptance);
				return list;
			} catch (Exception e) {
				e.printStackTrace();
			}

			return app;
		}
		

		
		//for fetching with acceptance , only for nurse
		public List<Appointment> showAppointment(String acceptance) {
			List<Appointment> app = null;

			try {
				List<Appointment> list = (List<Appointment>) this.appointmentrepository.findByAcceptance(acceptance);
				return list;
			} catch (Exception e) {
				e.printStackTrace();
			}

			return app;
		}
		
		
		//for fetching with physicianEmail and acceptance , only for physician
		public List<Appointment> showAppointmentByRejected(String physicianEmail ,String acceptance) {
			List<Appointment> app = null;

			try {
				List<Appointment> list = (List<Appointment>) this.appointmentrepository.findByPending(physicianEmail, acceptance);
				return list;
			} catch (Exception e) {
				e.printStackTrace();
			}

			return app;
		}
}
