import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthorizationsService } from '../../../services/authorizations.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authorizations-table',
  templateUrl: './authorizations-table.component.html',
  styleUrls: ['./authorizations-table.component.scss']
})
export class AuthorizationsTableComponent implements OnInit {

  /**
   * Inputs
   */
  @Input() params;
  @Input() $loadStatus;
  @Input() showPaginator = true;
  @Input() pagination: any = {
    page: 1,
    rpp: 15,
    total: 0,
  };

  /**
   * Public variables
   */
  public isLoading: boolean = false;
  public displayedColumns: string[] = ['id', 'requester', 'age', 'gender', 'procedure', 'status', 'actions'];
  public dataSource = new MatTableDataSource<any>([]);
  public authorizations: any[] = [];
  public loadSubscription: Subscription;
  public loadTarget;

  /**
   * Inject dependencies
   * @param service
   * @param toastr
   */
  constructor(private service: AuthorizationsService,
              private toastr: ToastrService) {
  }

  /**
   * Init component
   */
  ngOnInit(): void {

    this.loadSubscription = this.$loadStatus.subscribe(
      (loadTarget) => {
        if (loadTarget.status === this.params.status) {
          this.loadTarget = loadTarget;
          this.loadData(this.loadTarget);
        }
      }
    );

  }

  /**
   * Load authorizations from server
   * @param search
   */
  loadData(search: any = {}): void {
    this.isLoading = true;

    if (search.status === 'all') {
      search.status = null;
    }

    search = {...search, ...this.pagination};

    this.service.getAll(search).subscribe(response => {
      this.authorizations = response.data;
      this.dataSource = new MatTableDataSource(this.authorizations);
      this.pagination = response.pagination;
      this.isLoading = false;
    }, error => {
      this.toastr.error(error.error);
      this.isLoading = false;
    });
  }

  /**
   * Get gender text
   * @param gender
   */
  getGenderText(gender: string): string {
    switch (gender) {
      case 'f':
        return 'Feminino';
      case 'm':
        return 'Masculino';
      default:
        return '-';
    }
  }

  /**
   * Get status text
   * @param code
   */
  getStatusText(code: string): string {
    switch (code) {
      case 'authorized':
        return 'Aceita';
      case 'refused':
        return 'Negada';
      default:
        return '-';
    }
  }

  /**
   * Change paginator data
   * and reload table
   * @param event
   */
  paginatorChanged(event) {
    this.pagination.rpp = event.pageSize;
    this.pagination.page = (event.pageIndex + 1);
    this.loadData(this.loadTarget);
  }

}
