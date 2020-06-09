import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * Public variables
   */
  public dashboard;
  public $loadStatus = new Subject<any>();

  /**
   * Inject dependencies
   * @param dashboardService
   */
  constructor(private dashboardService: DashboardService) { }

  /**
   * Init component
   */
  ngOnInit(): void {

    this.loadDashboard();

    setTimeout(() => {
      this.$loadStatus.next({status: 'all'});
    }, 100);

  }

  /**
   * Load dashboard data
   */
  loadDashboard(): void {
    this.dashboardService.get().subscribe(response => {
      this.dashboard = response.data;
    }, error => console.error(error));
  }

}
