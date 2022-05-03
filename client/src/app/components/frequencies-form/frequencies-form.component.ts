import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Frequency } from 'src/app/models/Frequency';
import { FrequenciesService } from 'src/app/services/frequencies.service';

@Component({
  selector: 'app-frequencies-form',
  templateUrl: './frequencies-form.component.html',
  styleUrls: ['./frequencies-form.component.css']
})
export class FrequenciesFormComponent implements OnInit {

  @HostBinding('class') classes='row';
  frequency:Frequency=
  {
    frequencyId:'',
    frequency:''
  }
  edit:boolean=false;

  constructor(private frequenciesService:FrequenciesService, 
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params=this.activatedRoute.snapshot.params;
    //console.log(params);
    if(params['frequencyId'])
    {
      this.frequenciesService.getFrequency(params['frequencyId']).subscribe
      (
        res => 
        {
          console.log(res)
          this.frequency=res;
          this.edit=true;
        },
        err => console.error(err)
      )
    }
  }

  saveNewFrequency()
  {
    delete this.frequency.frequencyId;

    //console.log(this.teacher);
    this.frequenciesService.saveFrequency(this.frequency).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/frequencies']);
      },
      err => console.error(err)
    );
  }

  updateFrequency(){
    console.log(this.frequency);
    //! -->Utilizado cuando se pueden esperar distintos tipos de un dato
    this.frequenciesService.updateFrequency(this.frequency.frequencyId!,this.frequency).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/frequencies']);
      },
      err => console.error(err)
    );
  }
}