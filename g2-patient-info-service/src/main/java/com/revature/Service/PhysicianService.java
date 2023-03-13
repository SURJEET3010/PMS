package com.revature.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.Entity.PhysicianAvailability;
import com.revature.Repository.PhysicianRepo;

@Service
public class PhysicianService {

	@Autowired
	private PhysicianRepo physicianrepo;

	public PhysicianAvailability saveDetails(PhysicianAvailability physicianavailability) {
		
		  return physicianrepo.save(physicianavailability);
		 
	}
	
	public List<PhysicianAvailability> getallDetails(){
		return physicianrepo.findAll();
	}
	
	public List<PhysicianAvailability> getDetails(boolean availability){
		return physicianrepo.findByValue(availability);
	}
	
	public boolean deleteDetails(String physicianEmail) {
		
		  boolean b = physicianrepo.existsById(physicianEmail);
		  if(b != true) {
			  return false;
		  }
		  
		 physicianrepo.deleteById(physicianEmail); 
		 
		 return b;
		  
		 
	}
	
	public PhysicianAvailability updateDetails(PhysicianAvailability physicianavailability ,String physicianEmail) {
	PhysicianAvailability phy =	physicianrepo.findById(physicianEmail).orElse(null);	
	phy.setDate(physicianavailability.getDate());
	phy.setAvailability(physicianavailability.getAvailability());
		  return physicianrepo.saveAndFlush(phy);
	
	}
	
//	  public Physician UpdateAvailability(Physician physician, String
//	 physicianEmail) { physician.setPhysicianEmail(physicianEmail); Physician
//	  result = physicianRepository.save(physician); return result;
//	  
//	 }
//	 
	
	


//	  public PhysicianAvailability saveAllDetails(List<PhysicianAvailability> physicianavailability) {
//		  return (PhysicianAvailability) physicianrepo.saveAll((Iterable<PhysicianAvailability>) physicianavailability);
//	  }
	 
	 
//	 * } public PhysicianAvailability getDetails(PhysicianAvailability
//	 * physicianavailability) { return (PhysicianAvailability)
//	 * physicianrepo.findAll(); }
//	 */
}
