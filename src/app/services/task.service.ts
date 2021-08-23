import { Task } from './../Task';
import {Observable, of} from 'rxjs'
import { TASKS } from './../mock-tasks';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(TASKS)
  }
}
