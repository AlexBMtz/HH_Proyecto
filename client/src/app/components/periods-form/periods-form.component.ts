import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Period} from 'src/app/models/Period';
import { PeriodsService } from 'src/app/services/periods.service';

@Component({
  selector: 'app-periods-form',
  templateUrl: './periods-form.component.html',
  styleUrls: ['./periods-form.component.css']
})
export class PeriodsFormComponent implements OnInit {
  @HostBinding('class') classes='row';
  period:Period=
  {
    periodId:'',
    period:''
  }
  edit:boolean=false;
  rows:any=[];

  constructor(private router:Router,
    private activatedRoute:ActivatedRoute, private periodService:PeriodsService) { }

    ngOnInit(): void {
      const params=this.activatedRoute.snapshot.params;
      //console.log(params);
      if(params['periodId'])
      {
        this.periodService.getPeriod(params['periodId']).subscribe
        (
          res => 
          {
            console.log(res)
            this.period=res;
            this.edit=true;
          },
          err => console.error(err)
        )
      }
      this.periodService.getPeriods().subscribe(p=>{this.rows=p})
    }
  
    validatePeriod(){
      let flag=true;
      
        console.log(this.rows);
        for(let i=0; i<this.rows.length;i++)
        {
          if(this.rows[i]["period"]==this.period.period)
          {
            alert('El periodo ya existe');
            flag=false;
            break;
          }
        }
  
        if(flag)
        {
          if(this.edit)
          {
           this.updatePeriod();
          }
          else
          {
            this.saveNewPeriod();
          }
        }
    }

    saveNewPeriod()
    {
      delete this.period.periodId;
  
      //console.log(this.teacher);
      this.periodService.savePeriod(this.period).subscribe(
        res =>{
          console.log(res);
          this.router.navigate(['/periods']);
        },
        err => console.error(err)
      );
    }
  
    updatePeriod(){
      console.log(this.period);
      //! -->Utilizado cuando se pueden esperar distintos tipos de un dato
      this.periodService.updatePeriod(this.period.periodId!,this.period).subscribe(
        res =>{
          console.log(res);
          this.router.navigate(['/periods']);
        },
        err => console.error(err)
      );
    }
  }
