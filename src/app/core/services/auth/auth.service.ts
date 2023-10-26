import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WCEndPoint, env } from 'src/app/core/enums/wc-endpoints.enums';
import { ILogin, ILoginForm, IRegisterForm, IVerifyForm } from 'src/app/core/interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = env.baseUrl;
  constructor(private http: HttpClient) { }

  login(body: ILoginForm): Observable<ILogin>{
    return this.http.post(`${this.baseUrl}${WCEndPoint.Auth}/login`, body);
  }

  register(body: IRegisterForm): Observable<any>{
    return this.http.post(`${this.baseUrl}${WCEndPoint.Customers}/register`, body);
  }

  verify(body: IVerifyForm): Observable<any>{
    return this.http.post(`${this.baseUrl}${WCEndPoint.Account}/verification`, body);
  }
}
