import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { Observable } from 'rxjs';
import { WCEndPoint, env } from 'src/app/core/enums/wc-endpoints.enums';
import { IJWTResponse, ILogin, ILoginForm, IRegisterForm, IVerifyForm } from 'src/app/core/interfaces/auth.interface';
import { StoreService } from "../store.service";
import { StorageKey, TokenStorageKey } from "../../enums";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = env.baseUrl;
  constructor(private http: HttpClient, private storeService: StoreService) { }

  login(body: ILoginForm): Observable<ILogin>{
    return this.http.post(`${this.baseUrl}${WCEndPoint.Auth}/login`, body);
  }

  register(body: IRegisterForm): Observable<any>{
    return this.http.post(`${this.baseUrl}${WCEndPoint.Customers}/register`, body);
  }

  verify(body: IVerifyForm): Observable<any>{
    return this.http.post(`${this.baseUrl}${WCEndPoint.Account}/verification`, body);
  }

  decodeToken():IJWTResponse{
    const accessToken = this.storeService.getSession(TokenStorageKey.accessToken) || '';
    return jwtDecode(accessToken);
  }

  getDataByKey(key:StorageKey){
    const data:IJWTResponse = this.decodeToken();
    return data[key];
  }
}
