import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../domains/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  
  URL = "http://localhost:8085/"

  constructor(private http: HttpClient) {}

  getEstados() : Observable<Estado[]>{
    return this.http.get<Estado[]>(this.URL + "estados/")
  }

}
