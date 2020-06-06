import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private _http: HttpClient) {}

  postRequest<T>(path: string, data: any) {
    return this._http
      .post<T>(
        `${environment.apiUrl}:${environment.port}/${path}`,
        data,
        this.httpOption
      )
      .pipe((res) => {
        return res;
      });
  }

  getRequest<T>(path: string) {
    return this._http
      .get<T>(
        `${environment.apiUrl}:${environment.port}/${path}`,
        this.httpOption
      )
      .pipe((res) => {
        return res;
      });
  }
}
