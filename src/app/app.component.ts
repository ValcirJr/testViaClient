import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api'
import { Estado } from './domains/estado';
import { DisponibilidadeServicoNFService } from './services/disponibilidade-servico-nf.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'testevia-cliente';

  items: MenuItem[];
  display: boolean = false;
  indisponivel : Estado[];
  test: boolean;

  constructor(private service : DisponibilidadeServicoNFService ){

  }

  ngOnInit(){
    this.items = [
      {
        label:'Dashboard',
        icon:'pi pi-fw pi-file',
        routerLink: 'dashboard'
      },{
        label:'Entre Datas',
        icon:'pi pi-fw pi-calendar',
        routerLink: 'entreDatas'
      }
    ];
  }

    showDialog() {
        this.service.getMaiorIndisponibilidade().subscribe(e => {
          this.indisponivel = e
        })
        this.display = true;
        this.test = this.indisponivel.length > 0
        
    }

}
