import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Schedule} from '../models/Schedule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  constructor(private Http:HttpClient) 
  {
    
  }

  getSchedules()
  {
    return this.Http.get('http://localhost:5000/api/schedules');
  }

  getSchedule(scheduleId:string)
  {
    return this.Http.get('http://localhost:5000/api/schedules/'+scheduleId);
  }

  saveSchedule(schedule:Schedule)
  {
    return this.Http.post('http://localhost:5000/api/schedules/',schedule);
  }

  deleteSchedule(scheduleId:string)
  {
    return this.Http.delete('http://localhost:5000/api/schedules/'+scheduleId);
  }

  updateSchedule(scheduleId:string|number, schedule:Schedule):Observable<Schedule>
  {
    return this.Http.put('http://localhost:5000/api/schedules/'+scheduleId,schedule);
  }
}
