import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BmaCompanyService {

  constructor(private http: HttpClient) {
  }
  getAllService(): Observable<any> {
      const URLRequest = `${environment.api}/findall`;
      return this.http.get(URLRequest);
  }

  getSpecific(social: string): Observable<any> {
    const URLRequest = `${environment.api}/find/${social}`;
    return this.http.get(URLRequest);
  }

  createService(info: string): Observable<any> {
    const URLRequest = `${environment.api}/create`;
    return this.http.post(URLRequest, info);
  }

  updateService(social: string, info: string): Observable<any> {
    const URLRequest = `${environment.api}/actualizarParticipante/${social}`;
    return this.http.put(URLRequest, info);
  }

  DeleteService(social: string): Observable<any> {
    const URLRequest = `${environment.api}/eliminarParticipante/${social}`;
    return this.http.delete(URLRequest);
  }
}