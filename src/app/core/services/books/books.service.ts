import { Injectable } from '@angular/core';
import { WCEndPoint, env } from '../../enums/wc-endpoints.enums';
import { HttpClient } from '@angular/common/http';
import { IBookData, IBookSearchForm, IBooksResponse } from '../../interfaces/books.interface';
import { IResponse } from '../../interfaces/response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl = env.baseUrl;
  constructor(private http: HttpClient) { }

  getBooksList(body: IBookSearchForm): Observable<IResponse<IBooksResponse>>{
    return this.http.get<IResponse<IBooksResponse>>(`${this.baseUrl}${WCEndPoint.Book}?${body}`);
  }

  getBookById(body: string): Observable<IResponse<IBookData>>{
    return this.http.get<IResponse<IBookData>>(`${this.baseUrl}${WCEndPoint.Book}?${body}`);
  }
}
