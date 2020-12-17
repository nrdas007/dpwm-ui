import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Promotion } from 'src/app/promotion';
import {MenuItem, MessageService} from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-promo-creation',
  templateUrl: './promo-creation.component.html',
  styleUrls: ['./promo-creation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PromoCreationComponent implements OnInit {
  submitted = false;
  types = [];
  statusValues = [];
  selectedType = '';
  selectedStoreType = '';
  Promotions: Promotion[] = [];
  promotion: Promotion = {};
  selectedEvents: Promotion[] = [];
  items: MenuItem[];
  activeIndex = 0;
  // subscription: Subscription;

  constructor(public messageService: MessageService) {
    this.items = [{
      label: 'Primary Details',
      routerLink: 'summary'
  },
  {
      label: 'Product-vendor Selection',
      routerLink: 'product-vendor'
  },
  {
      label: 'Promotion Selection',
      routerLink: 'promoselection'
  },
  {
      label: 'Location Selection',
      routerLink: 'locationselection'
  },
  {
      label: 'Approval Workflow',
      routerLink: 'workflow'
  }
];
  }

  ngOnInit(): void {
      // this.subscription = this.ticketService.paymentComplete$.subscribe((personalInformation) =>{
      //     this.messageService.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your order completed.'});
      // });
  }

  // ngOnDestroy() {
  //     if (this.subscription) {
  //         this.subscription.unsubscribe();
  //     }
  // }
}
