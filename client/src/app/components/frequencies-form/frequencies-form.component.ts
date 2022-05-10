import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Frequency } from 'src/app/models/Frequency';
import { FrequenciesService } from 'src/app/services/frequencies.service';
import { LoginService } from 'src/app/services/login.service';

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
  rows:any=[];

  constructor(private frequenciesService:FrequenciesService, 
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private loginService : LoginService) { }

  ngOnInit(): void {
    var role = this.loginService.getCookie()
    if(role == '3'){
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
      this.frequenciesService.getFrequencies().subscribe(f=>{this.rows=f})
    }
    else{
      alert("No tienes permisos para acceder a este apartado.")
      this.router.navigate(['/'])
    }
    
  }

  validateFrequency(){
    let flag=true;
    
      console.log(this.rows);
      for(let i=0; i<this.rows.length;i++)
      {
        if(this.rows[i]["frequency"]==this.frequency.frequency)
        {
          alert('La frequencia ya existe');
          flag=false;
          break;
        }
      }

      if(flag)
      {
        if(this.edit)
        {
         this.updateFrequency();
        }
        else
        {
          this.saveNewFrequency();
        }
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