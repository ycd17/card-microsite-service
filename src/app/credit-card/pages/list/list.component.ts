import { Component, OnInit } from '@angular/core';
import { CreditCard } from '../../interfaces/credit-card.interface';
import { CreditCardService } from '../../services/credit-card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  creditCards: CreditCard[] = [];
  
  displayedColumns: string[] = ['dateCreation', 'dateModification', 'id', 'status', 'type'];

  constructor( private creditCardService: CreditCardService) { }

  ngOnInit(): void {
    this.creditCardService.getActiveCreditCard()
    .subscribe(response => {
      this.creditCards = response.data;
    });
  }

}
