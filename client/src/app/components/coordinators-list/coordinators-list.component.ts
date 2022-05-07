import { Component, HostBinding, OnInit } from '@angular/core';
import { CoordinatorsService } from 'src/app/services/coordinators.service';
import { Coordinator } from 'src/app/models/Coordinator';

@Component({
  selector: 'app-coordinators-list',
  templateUrl: './coordinators-list.component.html',
  styleUrls: ['./coordinators-list.component.css']
})
export class CoordinatorsListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  roles : any= [];
  coordinators:any=[];
  constructor(private coordiantorService: CoordinatorsService) 
  {

  }

  ngOnInit(): void
  {
    this.listCoordinators();
  }

  listCoordinators()
  {
    this.coordiantorService.getCoordinators().subscribe(
      res => this.coordinators=res,
      err => console.error(err)
    );
  }

  deleteCoordinator(coordinatorId:string)
  {
    this.coordiantorService.deleteCoordinator(coordinatorId).subscribe(
      res=>
      {
        console.log(res);
        this.listCoordinators();
      },
      err => console.error(err)
    )
  }

}
