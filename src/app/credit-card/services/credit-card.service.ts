import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from "../interfaces/response.interface";

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http: HttpClient) { }

  getActiveCreditCard(): Observable<Response>{
    return this.http.get<Response>('http://localhost:9060/api/v1/creditCard')
  }
}
