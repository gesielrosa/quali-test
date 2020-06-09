import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationsService {

  /**
   * Inject dependencies
   * @param http
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Get all authorizations
   * @param params
   */
  getAll(params = {}): Observable<any> {
    return this.http.post(`${environment.endpoint}authorizations`, params);
  }

  /**
   * Get authorization by id
   * @param id
   */
  get(id: number): Observable<any> {
    return this.http.get(`${environment.endpoint}authorizations/${id}`);
  }

  /**
   * Create authorization
   * @param formData
   */
  create(formData): Observable<any> {
    return this.http.post(`${environment.endpoint}authorizations/create`, formData);
  }

  /**
   * Update authorization
   * @param formData
   */
  update(formData): Observable<any> {
    return this.http.put(`${environment.endpoint}authorizations/${formData.id}`, formData);
  }

  /**
   * Remove authorization
   * @param id
   */
  delete(id): Observable<any> {
    return this.http.delete(`${environment.endpoint}authorizations/${id}`, {});
  }

}
