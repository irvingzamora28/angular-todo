import { Task } from './../../Task';
import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {text: '', day: '', reminder: false};
  faTimes = faTimes
  
  constructor() { }

  ngOnInit(): void {
  }

}
