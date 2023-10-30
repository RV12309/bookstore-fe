import { Injectable } from '@angular/core';
import { WCEndPoint, env } from '../../enums/wc-endpoints.enums';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../../interfaces/response.interface';
import { ICategoryResponse } from '../../interfaces/category.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private baseUrl = env.baseUrl;
  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<IResponse<ICategoryResponse>>{
    return this.http.get<IResponse<ICategoryResponse>>(`${this.baseUrl}${WCEndPoint.Category}/all`);
  }
}
