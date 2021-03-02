import { DatePipe } from '@angular/common';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DisponibilidadeServicoNF } from 'src/app/domains/disponibilidadeServicoNF';
import { DisponibilidadeServicoNFService } from 'src/app/services/disponibilidade-servico-nf.service';

@Component({
  selector: 'app-disp-entre-datas',
  templateUrl: './disp-entre-datas.component.html',
  styleUrls: ['./disp-entre-datas.component.sass']
})
export class DispEntreDatasComponent implements OnInit {


  datainicial: Date = new Date
  datafinal: Date = new Date
  disponibilidades: DisponibilidadeServicoNF[]

  constructor(private dispoService : DisponibilidadeServicoNFService,
              private dateFormatPipe:DateFormatPipe) { }

  ngOnInit(): void {
    this.dispoService.getDisponibilidadeEntreDatas(this.dateFormatPipe.transform(this.datainicial),
                                                    this.dateFormatPipe.transform(this.datafinal))
            .subscribe(s => {
              this.disponibilidades = s
            })
  }
  
  filtrarEntreDatas(){
    console.log(this.dateFormatPipe.transform(this.datainicial) +
    this.dateFormatPipe.transform(this.datafinal))
    this.dispoService.getDisponibilidadeEntreDatas(this.dateFormatPipe.transform(this.datainicial),
                                                    this.dateFormatPipe.transform(this.datafinal))
            .subscribe(s => {
              this.disponibilidades = s
            })

  }
}

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
     return super.transform(value, "yyyy-MM-dd");
  }
}
