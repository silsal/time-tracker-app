import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() userDetails: [{activity: string, hours: {current: number, previous: number}}];

  constructor() { }

  ngOnInit(): void {
    console.log('--->', this.userDetails);
  }

}
