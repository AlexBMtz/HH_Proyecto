import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrequenciesService } from 'src/app/services/frequencies.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-frequencies-list',
  templateUrl: './frequencies-list.component.html',
  styleUrls: ['./frequencies-list.component.css']
})
export class FrequenciesListComponent implements OnInit {
  @HostBinding('class') classes='row';
  frequencies:any=[];
  constructor(private frequenciesService:FrequenciesService, private router : Router,
    private loginService : LoginService) { }

  ngOnInit(): void {
    var role = this.loginService.getCookie()
    if(role == '3'){
      this.listFrequencies();
    }
    else{
      alert("No tienes permisos para acceder a este apartado.")
      this.router.navigate(['/'])
    }
  }

  listFrequencies(){
    this.frequenciesService.getFrequencies().subscribe(
      res => this.frequencies=res,
      err => console.error(err)
    );
  }

  deleteFrequency(frequencyId:string)
  {
    this.frequenciesService.deleteFrequency(frequencyId).subscribe
    (
      res =>
      {
        console.log(res);
        this.listFrequencies();
      },
      err => console.error(err)
    );
  }

}