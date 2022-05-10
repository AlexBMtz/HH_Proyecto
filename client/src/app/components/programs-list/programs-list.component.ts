import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ProgramsService } from 'src/app/services/programs.service';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.css']
})
export class ProgramsListComponent implements OnInit {
  @HostBinding('class') classes='row';
  programs:any=[];

  constructor(private programService:ProgramsService, private router : Router,
    private loginService : LoginService) { }

  ngOnInit(): void {
    var role = this.loginService.getCookie()
    if(role == '3'){
      this.listPrograms();
    }
    else{
      alert("No tienes permisos para acceder a este apartado.")
      this.router.navigate(['/'])
    }
  }

  listPrograms(){
    this.programService.getPrograms().subscribe(
      res => this.programs=res,
      err => console.error(err)
    );
  }

  deleteProgram(program:string)
  {
    this.programService.deleteProgram(program).subscribe
    (
      res =>
      {
        console.log(res);
        this.listPrograms();
      },
      err => console.error(err)
    );
  }



}
