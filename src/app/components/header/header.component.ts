import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'angular todo';
  showAddTask: boolean = false
  subscription:Subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)

  constructor(private uiService:UiService) {
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }
}
