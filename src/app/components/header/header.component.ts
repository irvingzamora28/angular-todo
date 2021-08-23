import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'angular todo';
  showAddTask: boolean = false
  subscription:Subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)

  constructor(private uiService:UiService, private router: Router) {
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }

  hasRoute(route: string) {
    return this.router.url === route
  }
}
