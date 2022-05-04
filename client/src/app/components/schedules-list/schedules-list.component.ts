import { Component, HostBinding, OnInit } from '@angular/core';
import { SchedulesService } from 'src/app/services/schedules.service';

@Component({
  selector: 'app-schedules-list',
  templateUrl: './schedules-list.component.html',
  styleUrls: ['./schedules-list.component.css']
})
export class SchedulesListComponent implements OnInit {
  @HostBinding('class') classes='row';
  schedules:any=[];
  constructor(private schedulesService:SchedulesService) { }

  ngOnInit(): void {
    this.listSchedules();
  }

  listSchedules(){
    this.schedulesService.getSchedules().subscribe(
      res => this.schedules=res,
      err => console.error(err)
    );
  }

  deleteSchedule(scheduleId:string)
  {
    this.schedulesService.deleteSchedule(scheduleId).subscribe
    (
      res =>
      {
        console.log(res);
        this.listSchedules();
      },
      err => console.error(err)
    );
  }

}
