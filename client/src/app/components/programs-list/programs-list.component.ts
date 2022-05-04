import { Component, HostBinding, OnInit } from '@angular/core';
import { ProgramsService } from 'src/app/services/programs.service';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.css']
})
export class ProgramsListComponent implements OnInit {
  @HostBinding('class') classes='row';
  programs:any=[];

  constructor(private programService:ProgramsService) { }

  ngOnInit(): void {
    this.listPrograms();
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
