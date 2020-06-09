import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  /**
   * Inject dependencies
   * @param http
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Get dashboard data
   */
  get(): Observable<any> {
    return this.http.get(`${environment.endpoint}dashboard`);
  }

}
