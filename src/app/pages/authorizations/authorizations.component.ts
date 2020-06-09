import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-authorizations',
  templateUrl: './authorizations.component.html',
  styleUrls: ['./authorizations.component.scss']
})
export class AuthorizationsComponent implements OnInit {

  /**
   * Public variables
   */
  public $loadStatus = new Subject<any>();
  public status: string[] = ['all', 'authorized', 'refused'];
  public tabIndex: number = 0;
  public search = {
    id: null,
    requester: null,
    age: null,
    gender: null,
    procedure: null
  };

  /**
   * Init component
   */
  ngOnInit(): void {

    setTimeout(() => {
      this.$loadStatus.next({status: this.status[0]});
    }, 100);

  }

  /**
   * Emit loader params to table component on tab change
   * @param event
   */
  onTabChange(event: MatTabChangeEvent): void {
    this.tabIndex = event.index;
    const status: string = this.status[this.tabIndex];
    this.$loadStatus.next({status});
  }

  /**
   * Emit loader params to do changes
   */
  doSearch(): void {
    const status: string = this.status[this.tabIndex];
    this.$loadStatus.next({status, ...this.search});
  }

  /**
   * Clear filters and reload table
   */
  doClearFilters(): void {
    this.search = {
      id: null,
      requester: null,
      age: null,
      gender: null,
      procedure: null
    };
    this.doSearch();
  }

}

