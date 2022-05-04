import { Component, HostBinding, OnInit } from '@angular/core';
import { PeriodsService } from 'src/app/services/periods.service';

@Component({
  selector: 'app-periods-list',
  templateUrl: './periods-list.component.html',
  styleUrls: ['./periods-list.component.css']
})
export class PeriodsListComponent implements OnInit {
  @HostBinding('class') classes='row';
  periods:any=[];
  constructor(private periodService:PeriodsService) { }

  ngOnInit(): void {
    this.listPeriods();
  }

  listPeriods(){
    this.periodService.getPeriods().subscribe(
      res => this.periods=res,
      err => console.error(err)
    );
  }

  deletePeriod(periodId:string)
  {
    this.periodService.deletePeriod(periodId).subscribe
    (
      res =>
      {
        console.log(res);
        this.listPeriods();
      },
      err => console.error(err)
    );
  }

}
