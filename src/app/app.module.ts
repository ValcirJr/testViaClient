import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


import {MenubarModule} from 'primeng/menubar';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';    
import {DropdownModule} from 'primeng/dropdown'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import { DateFormatPipe, DispEntreDatasComponent } from './components/disp-entre-datas/disp-entre-datas.component';
import { DatePipe } from '@angular/common';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DispEntreDatasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    AccordionModule,
    TableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    ButtonModule,
    DialogModule

    
  ],
  providers: [DateFormatPipe,
              DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
