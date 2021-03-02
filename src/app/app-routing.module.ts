import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DispEntreDatasComponent } from './components/disp-entre-datas/disp-entre-datas.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'entreDatas', component: DispEntreDatasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
