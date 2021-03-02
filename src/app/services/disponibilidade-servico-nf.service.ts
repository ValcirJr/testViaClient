import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoDisponibilidade } from '../domains/estadoDisponibilidade';
import { Observable } from 'rxjs';
import { DisponibilidadeServicoNF } from '../domains/disponibilidadeServicoNF';
import { Estado } from '../domains/estado';

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadeServicoNFService {

  URL = "http://localhost:8085/disponibilidade/"

  constructor(private http: HttpClient) {}

  getEstadoDisponibilidade() : Observable<EstadoDisponibilidade[]>{
    return this.http.get<EstadoDisponibilidade[]>(this.URL )
  }

  getDisponibilidadePorEstado(sigla : String) : Observable<EstadoDisponibilidade[]>{
    return this.http.get<EstadoDisponibilidade[]>(this.URL +  sigla)
  }
  
  getDisponibilidadeEntreDatas(dataInicial : String, dataFinal : String) : Observable<DisponibilidadeServicoNF[]>{
    return this.http.get<DisponibilidadeServicoNF[]>(this.URL + dataInicial + "/"+ dataFinal)
  }

  getMaiorIndisponibilidade(): Observable<Estado[]>{
    return this.http.get<Estado[]>(this.URL + "maiorIndisponibilidade")
  }

}
