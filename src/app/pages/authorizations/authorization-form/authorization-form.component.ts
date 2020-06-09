import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorizationsService } from '../../../services/authorizations.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.scss']
})
export class AuthorizationFormComponent implements OnInit {

  /**
   * Public variables
   */
  public form: FormGroup;
  public mode: 'edit' | 'details' | 'new' = 'new';
  public isLoading: boolean = false;
  public authorization: any;

  /**
   * Private variables
   */
  private params;

  /**
   * Inject dependencies
   * and create form group
   * @param activatedRoute
   * @param service
   * @param router
   * @param toastr
   */
  constructor(private activatedRoute: ActivatedRoute,
              private service: AuthorizationsService,
              private router: Router,
              private toastr: ToastrService) {

    this.form = new FormGroup({
      id: new FormControl(),
      procedure: new FormControl('', [Validators.required]),
      requester: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      status: new FormControl(),
      message: new FormControl()
    });

  }

  /**
   * Init component
   */
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.params = params;
      this.loadAuthorization();
    });
  }

  /**
   * Prepare params to load authorizations data
   */
  loadAuthorization(): void {
    const routePath = this.activatedRoute.routeConfig.path;
    switch (routePath) {
      case ':id/details':
        this.mode = 'details';
        this.loadData(this.params.id);
        break;
      case ':id/edit':
        this.mode = 'edit';
        this.loadData(this.params.id);
        break;
      case 'new':
        this.mode = 'new';
        break;
    }
  }

  /**
   * Load authorizations data from server
   * @param id
   */
  loadData(id: number): void {
    this.isLoading = true;
    this.service.get(id).subscribe(response => {
      this.authorization = response.data;
      this.mapDataToForm(this.authorization);
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      if (error.status === 404) {
        this.router.navigate(['/authorizations']);
      }
      this.toastr.error(error.error);
    });
  }

  /**
   * Set form controls values
   * @param data
   */
  mapDataToForm(data): void {
    if (!data) { return; }
    Object.keys(data).forEach(key => {
      if (this.form.controls[key]) {
        this.form.controls[key].setValue(data[key]);
      }
    });
  }

  /**
   * Send authorization data to server
   */
  doSave(): void {
    this.isLoading = true;
    const formData = this.form.value;
    const action = formData.id ? 'update' : 'create';

    this.service[action](formData).subscribe(response => {
      this.isLoading = false;
      this.toastr.success('Cadastro salvo com sucesso!');
      this.router.navigate(['/authorizations']);
    }, error => {
      this.toastr.error(error.error);
      this.isLoading = false;
    });
  }

  /**
   * Remove authorization
   */
  doRemove(): void {
    this.isLoading = true;
    this.service.delete(this.form.value.id).subscribe(response => {
      this.isLoading = false;
      this.router.navigate(['/authorizations']);
    }, error => {
      this.toastr.error(error.error);
      this.isLoading = false;
    });
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

}
