import { Component, HostBinding, OnInit } from '@angular/core';
import { FrequenciesService } from 'src/app/services/frequencies.service';

@Component({
  selector: 'app-frequencies-list',
  templateUrl: './frequencies-list.component.html',
  styleUrls: ['./frequencies-list.component.css']
})
export class FrequenciesListComponent implements OnInit {
  @HostBinding('class') classes='row';
  frequencies:any=[];
  constructor(private frequenciesService:FrequenciesService) { }

  ngOnInit(): void {
    this.listFrequencies();
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