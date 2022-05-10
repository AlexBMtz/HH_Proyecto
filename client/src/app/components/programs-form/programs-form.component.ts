import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Program} from 'src/app/models/Program';
import { LoginService } from 'src/app/services/login.service';
import { ProgramsService } from 'src/app/services/programs.service';

@Component({
  selector: 'app-programs-form',
  templateUrl: './programs-form.component.html',
  styleUrls: ['./programs-form.component.css']
})
export class ProgramsFormComponent implements OnInit {
  @HostBinding('class') classes='row';
  program:Program=
  {
    programId:'',
    program:''
  }
  edit:boolean=false;
  rows:any=[];

  constructor(private router:Router,
    private activatedRoute:ActivatedRoute, 
    private programService:ProgramsService,
    private loginService : LoginService) { }

  ngOnInit(): void {
    var role = this.loginService.getCookie()
    if(role == '3'){
      const params=this.activatedRoute.snapshot.params;
      //console.log(params);
      if(params['programId'])
      {
        this.programService.getProgram(params['programId']).subscribe
        (
          res => 
          {
            console.log(res)
            this.program=res;
            this.edit=true;
          },
          err => console.error(err)
        )
      }
      this.programService.getPrograms().subscribe(p=>{this.rows=p})
    }
    else{
      alert("No tienes permisos para acceder a este apartado.")
      this.router.navigate(['/'])
    }
    
    }


    validateProgram(){
      let flag=true;
      
        console.log(this.rows);
        for(let i=0; i<this.rows.length;i++)
        {
          if(this.rows[i]["program"]==this.program.program)
          {
            alert('El programa ya existe');
            flag=false;
            break;
          }
        }
  
        if(flag)
        {
          if(this.edit)
          {
           this.updateProgram();
          }
          else
          {
            this.saveNewProgram();
          }
        }
    }
  
    saveNewProgram()
    {
      delete this.program.programId;
  
      //console.log(this.teacher);
      this.programService.saveProgram(this.program).subscribe(
        res =>{
          console.log(res);
          this.router.navigate(['/programs']);
        },
        err => console.error(err)
      );
    }
  
    updateProgram(){
      console.log(this.program);
      //! -->Utilizado cuando se pueden esperar distintos tipos de un dato
      this.programService.updateProgram(this.program.programId!,this.program).subscribe(
        res =>{
          console.log(res);
          this.router.navigate(['/programs']);
        },
        err => console.error(err)
      );
    }
  }
