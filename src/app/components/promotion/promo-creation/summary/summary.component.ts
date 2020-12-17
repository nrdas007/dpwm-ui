import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Promotion } from 'src/app/promotion';
import { Router } from '@angular/router';
import { PromotionService } from '../../promotionservice';
import * as moment from 'moment';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SummaryComponent implements OnInit {
  submitted = false;
  promotionInformation: any;
  promoEventRange: any;
  statusValues: any[] = [];
  eventNames: any[] = [];
  selectedType = '';
  promotion: Promotion = {};
  minDate: Date;
  maxDate: Date;
  constructor(private router: Router, private promoService: PromotionService) {
    this.minDate = new Date();
    this.maxDate = new Date("2099-12-31");
    console.log('OnInit----->this.minDate',this.minDate ,'this.maxDate' , this.maxDate);
    
    this.promotionInformation = this.promoService.getPromotionInformation().Summary;
   }

  ngOnInit(): void {
    this.statusValues = [
      {label: 'Yet to start', value: 'Yet to start'},
      {label: 'Running', value: 'Running'},
      {label: 'Completed', value: 'Completed'}
  ];
    this.eventNames = [
      {label: 'Promotion event 1', value: 'P001'},
      {label: 'Promotion event 2', value: 'P002'},
      {label: 'Promotion event 3', value: 'P003'}
  ];
   this.promoEventRange = {
      'P001': {'sdate':'20201015','edate':'20210228'},
      'P002': {'sdate':'20201015','edate':'20210228'},
      'P003': {'sdate':'20201015','edate':'20210228'},
   };
  }
  onEventChange(): void {
    const startDate = this.promoEventRange[this.promotionInformation.promoEvent].sdate;
    const endDate = this.promoEventRange[this.promotionInformation.promoEvent].edate;
    this.minDate = new Date(moment(startDate).format('YYYY-MM-DD'));
    this.maxDate = new Date(moment(endDate).format('YYYY-MM-DD'));
    console.log('OnChange----->this.minDate',this.minDate ,'this.maxDate' , this.maxDate);
  }
  onShowStartCal(): void {
    
  }
  onShowEndCal(): void {

  }
  nextPage(): void {
    this.submitted = true;
    if (this.promotionInformation.name && this.promotionInformation.description && this.promotionInformation.sdate && this.promotionInformation.edate) {
        this.promoService.promotionInformation.Summary = this.promotionInformation;
        this.router.navigate(['promotion/product-vendor']);

        return;
    }

    this.submitted = true;
}
}
