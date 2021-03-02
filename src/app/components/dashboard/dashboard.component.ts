import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Estado } from 'src/app/domains/estado';
import { EstadoDisponibilidade } from 'src/app/domains/estadoDisponibilidade';
import { DisponibilidadeServicoNFService } from 'src/app/services/disponibilidade-servico-nf.service';
import { EstadoService } from 'src/app/services/estado.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  disponibilidades: EstadoDisponibilidade[]
  estados: Estado[]
  selectedEstado: Estado
  

  constructor(private dispoService : DisponibilidadeServicoNFService,
              private estService : EstadoService) { }

  ngOnInit(): void {
    this.dispoService.getEstadoDisponibilidade().subscribe(d => {
      console.log(d)
      this.disponibilidades = d
    })

    this.estService.getEstados().subscribe(e => {
      this.estados = e
    })
  }

  onChangeEstado(event) {
    if(event.value == null){
      this.dispoService.getEstadoDisponibilidade().subscribe(d => {
        console.log(d)
        this.disponibilidades = d
      })
    }else{}
    this.dispoService.getDisponibilidadePorEstado(event.value.sigla).subscribe(e => {
      this.disponibilidades = e
    })}
    filtrarEntreDatas(){

    }

}

