import { Component, OnInit } from '@angular/core';
import { userData } from 'src/assets/data/data';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {

  userDetails = userData;

  constructor() { }

  ngOnInit(): void {
  }

}
