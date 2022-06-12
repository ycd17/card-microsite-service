import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { CreditCardComponent } from './pages/creditCard/credit-card.component';
import { ListComponent } from './pages/list/list.component';
import { CreditCardRoutingModule } from './credit-card-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    CreditCardComponent,
    ListComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    MaterialModule
  ]
})
export class CreditCardModule { }
