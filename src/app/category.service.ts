import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(){
    const url = 'http://localhost:30030/category/getAll';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, {headers});
  }
}
