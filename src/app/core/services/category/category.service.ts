import { Injectable } from '@angular/core';
import { WCEndPoint, env } from '../../enums/wc-endpoints.enums';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../../interfaces/response.interface';
import { ICategoryForm, ICategoryResponse } from '../../interfaces/category.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private baseUrl = env.baseUrl;
  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<IResponse<ICategoryResponse[]>>{
    return this.http.get<IResponse<ICategoryResponse[]>>(`${this.baseUrl}${WCEndPoint.Category}/all`);
  }

  addNewCategory(body: ICategoryForm): Observable<IResponse<ICategoryResponse>>{
    return this.http.post<IResponse<ICategoryResponse>>(`${this.baseUrl}${WCEndPoint.Category}`, body);
  }

  deleteCategory(body: string): Observable<IResponse<any>>{
    return this.http.delete<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Category}`, {body: body});
  }
}
