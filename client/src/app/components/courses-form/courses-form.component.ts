import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CoursesService } from 'src/app/services/courses.service';
import { SchedulesService } from 'src/app/services/schedules.service';
import { FrequenciesService } from 'src/app/services/frequencies.service';
import { TeachersService } from 'src/app/services/teachers.service';
import { ProgramsService } from 'src/app/services/programs.service';
import { PeriodsService } from 'src/app/services/periods.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css']
})

export class CoursesFormComponent implements OnInit 
{
  @HostBinding('class') classes='row';
  course:Course=
  {
    crn:'',
    courseName:'',
    scheduleId:'',
    frequencyId:'',
    periodId:'',
    programId:'',
    startingDate:new Date(),
    teacherId:''
  };

  edit:boolean=false;
  schedules:any=[];
  frequencies:any=[];
  teachers:any=[];
  programs:any=[];
  periods:any=[];
  
  constructor(private coursesService:CoursesService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private schedulesService:SchedulesService,
    private frequenciesService:FrequenciesService,
    private teachersService:TeachersService,
    private programsService:ProgramsService,
    private periodsService:PeriodsService) { }

  ngOnInit(): void {

    this.schedules=this.schedulesService.getSchedules().subscribe(s=>{this.schedules=s});
    this.frequencies=this.frequenciesService.getFrequencies().subscribe(f=>{this.frequencies=f});
    this.teachers=this.teachersService.getTeachers().subscribe(t=>{this.teachers=t})
    this.programs=this.programsService.getPrograms().subscribe(p=>{this.programs=p})
    this.periods=this.periodsService.getPeriods().subscribe(p=>{this.periods=p})
    
    const params=this.activatedRoute.snapshot.params;

    if(params['crn'])
    {
      this.coursesService.getCourse(params['crn']).subscribe
      (
        res => 
        {
          console.log(res)
          this.course=res;
          this.edit=true;
        },
        err => console.error(err)
      )
    }
  }

  saveNewCourse()
  {
    this.coursesService.saveCourse(this.course).subscribe(
      res =>{
        console.log(this.course)
        console.log(res);
        this.router.navigate(['/courses']);
      },
      err => console.error(err)
    );
  }

  updateCourse(){
    //console.log(this.teacher);
    //! -->Utilizado cuando se pueden esperar distintos tipos de un dato
    this.coursesService.updateCourse(this.course.crn!,this.course).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/courses']);
      },
      err => console.error(err)
    );
  }

}
