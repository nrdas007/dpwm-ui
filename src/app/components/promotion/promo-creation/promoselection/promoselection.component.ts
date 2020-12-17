import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PromotionService } from '../../promotionservice';

@Component({
  selector: 'app-promoselection',
  templateUrl: './promoselection.component.html',
  styleUrls: ['./promoselection.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PromoselectionComponent implements OnInit {
  promotionTypeInfo: any;
  products: any[] = [];
  productsList: any[] = [];
  productsPrice: any;
  simplePromoValues: any[] = [];
  complexPromoValues: any[] = [];
  valid = true;
  showtable = false;
  constructor(private router: Router, private promoService: PromotionService) {
    this.promotionTypeInfo = this.promoService.getPromotionInformation().promotionselection;
    console.log('this.promotionTypeInfo', this.promotionTypeInfo);
    
  }

  ngOnInit(): void {

    this.products = [
      {name: 'I phone10 - 14587962', code: '14587962'},
      {name: 'I phone9 - 14587968', code: '14587968'},
      {name: 'I phone10Max - 14587969', code: '14587969'},
      {name: 'I phone9Pro - 14587967', code: '14587967'},
      {name: 'I phone5 - 14587963', code: '14587963'}
  ];
    this.productsPrice = {'14587962': '104','14587968': '144','14587969': '125','14587967': '256','14587963': '245'};
    this.simplePromoValues = [
      {label: 'Amount off', value: 'Amount off'},
      {label: 'Percentage off', value: 'Percentage off'},
      {label: 'Fixed price', value: 'Fixed price'}
  ];
    this.complexPromoValues = [
      {label: 'Amount off', value: 'SO1'},
      {label: 'Buy 2 get 10% off', value: 'SO2'},
      {label: 'Buy 3 get 25% off', value: 'SO3'},
      {label: 'Buy 3 get 1 free', value: 'SO4'}
  ];
  this.getTableData();
  }


  onProductSelectionChange(): void {
    this.getTableData();
    
  }
  onRadioBtnClick(): void {
    this.getTableData();
  }
  onPromoChange(): void {
    // this.getTableData();
  }
  onValInput(): void {
    console.log('on enter');
    
    this.getTableData();
  }
  getTableData(): void {
    if (this.promotionTypeInfo.products.length > 0 && this.promotionTypeInfo.promotype === 'Simple Promotion' 
    && this.promotionTypeInfo.promotionval && this.promotionTypeInfo.value) {
      this.showtable = true;
    } else {
      this.showtable = false;
      return;
    }
    this.productsList = this.promotionTypeInfo.products.map((item: any) => {
      return {product: item.name , sp: this.productsPrice[item.code], promo: this.promotionTypeInfo.promotionval, fp: this.getRevisedPrice(this.productsPrice[item.code], this.promotionTypeInfo.promotionval, this.promotionTypeInfo.value)}
    })
  }

  getRevisedPrice(price: any ,ev: any, val: any) : any {
    console.log(price, ev, val);
    
    let newPrice: any;
     switch (ev) {
       case 'Amount off':
          newPrice = +price - val;
         return newPrice;
         break;
       case 'Percentage off':
         newPrice = +price - (+price*(val/100));
        return newPrice;
         break;
       case 'Fixed price':
        newPrice = val;
        return newPrice;
         break;
     
       default:
         return 0;
         break;
     }
  }
  nextPage(): void {
    if (this.promotionTypeInfo.promotype && this.promotionTypeInfo.promotionval) {
      this.promoService.promotionInformation.promotionselection = this.promotionTypeInfo;
      this.router.navigate(['promotion/locationselection']);

      return;
  } else {
    this.valid = false;
}
}

  prevPage(): void {
    this.router.navigate(['promotion/product-vendor']);
  }
}
