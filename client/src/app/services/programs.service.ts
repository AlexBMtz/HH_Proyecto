import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Program } from '../models/Program';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private Http:HttpClient) { }

  getPrograms()
  {
    return this.Http.get('http://localhost:5000/api/programs')
  }

  getProgram(programId:string)
  {
    return this.Http.get('http://localhost:5000/api/programs/'+programId);
  }

  saveProgram(program:Program)
  {
    return this.Http.post('http://localhost:5000/api/programs/',program);
  }

  deleteProgram(programId:string)
  {
    return this.Http.delete('http://localhost:5000/api/programs/'+programId);
  }

  updateProgram(programId:string|number, program:Program):Observable<Program>
  {
    return this.Http.put('http://localhost:5000/api/programs/'+programId,program);
  }
}
