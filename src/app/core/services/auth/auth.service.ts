import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WCEndPoint, env } from 'src/app/core/enums/wc-endpoints.enums';
import { Observable } from 'rxjs';
import { ILogin, ILoginForm, IRegisterForm, IVerifyForm } from 'src/app/core/interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = env.baseUrl;
  constructor(private http: HttpClient) { }

  login(body: ILoginForm): Observable<ILogin>{
    return this.http.post(`${this.baseUrl}${WCEndPoint.Login}`, body);
  }

  register(body: IRegisterForm): Observable<any>{
    return this.http.post(`${this.baseUrl}${WCEndPoint.UserRegister}`, body);
  }

  verify(body: IVerifyForm): Observable<any>{
    return this.http.post(`${this.baseUrl}${WCEndPoint.AccVerify}`, body);
  }
}
