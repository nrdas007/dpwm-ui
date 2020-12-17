import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PromotionService } from '../../promotionservice';

@Component({
  selector: 'app-locationselection',
  templateUrl: './locationselection.component.html',
  styleUrls: ['./locationselection.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LocationselectionComponent implements OnInit {
  promotionLocations: any;
  stores: any[] = [];
  valid = true;
  constructor(private router: Router, private promoService: PromotionService) {
    this.promotionLocations = this.promoService.getPromotionInformation().locationselection;
    console.log('this.promotionTypeInfo', this.promotionLocations);
   }

  ngOnInit(): void {
    this.stores = [
      {name: 'Store A', code: 'a'},
      {name: 'Store B', code: 'b'},
      {name: 'Store C', code: 'c'},
      {name: 'Store D', code: 'd'},
      {name: 'Store E', code: 'e'}
  ];
  }
  submitToVendor(): void {
    if (this.promotionLocations.stores && this.promotionLocations.stores.length > 0) {
            this.promoService.promotionInformation.locationselection = this.promotionLocations;
      
            return;
        } else {
          this.valid = false;
      }
  }
//   nextPage(): void {
//     console.log('this.promotionLocations', this.promotionLocations.stores);
    
//     if (this.promotionLocations.stores && this.promotionLocations.stores.length > 0) {
//       this.promoService.promotionInformation.locationselection = this.promotionLocations;
//       this.router.navigate(['promotion/workflow']);

//       return;
//   } else {
//     this.valid = false;
// }
// }

  prevPage(): void {
    this.router.navigate(['promotion/promoselection']);
  }


}
