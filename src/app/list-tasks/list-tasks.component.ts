import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userData } from 'src/assets/data/data';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {

  userDetails = userData;
  recordToView = 'daily';
  detailsToView: any = [];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      param => {
        this.recordToView = param['period'];
        this.detailsToView = this.userDetails.map(detail => {
          return {activity: detail.title, hours: detail.timeframes[`${this.recordToView}`]}
        });
        // console.log(this.detailsToView);
      }
    );
  }

}
