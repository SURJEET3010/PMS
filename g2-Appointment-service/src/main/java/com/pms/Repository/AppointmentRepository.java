package com.pms.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pms.Entity.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
	@Query(value="SELECT * FROM Appointment pv WHERE physician_email= ?1 and appointment_date= ?2 and acceptance= ?3",  nativeQuery = true)
	List<Appointment> findAppointment(String physicianEmail , String date, String acceptance);

	@Query(value="SELECT * FROM Appointment pv WHERE patient_id= ?1",  nativeQuery = true)
	List<Appointment> findAppointmentByPatientId(int patientId);
	
	@Query(value="SELECT * FROM Appointment pv WHERE acceptance= ?1",  nativeQuery = true)
	public List<Appointment> findByAcceptance(String acceptance);
	
	
	@Query(value="SELECT * FROM Appointment pv WHERE physician_email= ?1 and acceptance= ?2",  nativeQuery = true)
	public List<Appointment> findByPending(String physicianEmail , String acceptance);

	

}
