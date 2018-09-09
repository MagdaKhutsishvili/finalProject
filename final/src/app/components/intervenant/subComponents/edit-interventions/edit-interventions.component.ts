import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Intervention } from '../../../../metier/objet-intervention';
import { InterventionsRepositoryService } from '../../../../services/interventions-repository.service';


@Component({
  selector: 'app-edit-interventions',
  templateUrl: './edit-interventions.component.html',
  styleUrls: ['./edit-interventions.component.css']
})
export class EditInterventionsComponent implements OnInit {


  @Input() public editId: number;
  public currentIntervention : Intervention;

  constructor(private InterventionRepository : InterventionsRepositoryService) {


   }



   public saveIntervention() {
    
      if (this.currentIntervention.id > 0){
        let InterToSave = new Intervention(0,"1-1-1999","1-1-1999","rien","toi",0,0,"","1-1-1999","1-1-1999");
        
        // retransformation du modele/json du formulaire
        // en veritable objet Livre avec ses méthodes
        InterToSave.copyFrom(this.currentIntervention);
  
        this.InterventionRepository.updateIntervention(InterToSave);
        this.currentIntervention = new Intervention(0,"1-1-1999","1-1-1999","rien","toi",0,0,"","1-1-1999","1-1-1999");
      }
 
    }
  public cancelIntervention() {
    this.currentIntervention = new Intervention(0,"1-1-1999","1-1-1999","rien","toi",0,0,"","1-1-1999","1-1-1999");
  }





  ngOnInit() {
    this.currentIntervention=new Intervention(0,"1-1-1999","1-1-1999","rien","toi",0,0,"","1-1-1999","1-1-1999");
  }

  ngOnChanges(changes:any){
    
    if (this.editId==0){
      this.currentIntervention=new Intervention(0,"1-1-1999","1-1-1999","rien","toi",0,0,"","1-1-1999","1-1-1999");
    }
    else{
      this.InterventionRepository.findById(this.editId).subscribe(intervention=> { this.currentIntervention=intervention;
      });
    }
  }

}