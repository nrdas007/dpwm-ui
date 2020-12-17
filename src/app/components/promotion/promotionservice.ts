import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PromotionService {

    promotionInformation = {
        Summary: {
            name: '',
            description: '',
            promoEvent: '',
            status: '',
            sdate: '',
            edate: '',
            store: 'All Store'
        },
        productvendor: {
            selectedHierarchy: {}
        },
        promotionselection: {
            products: [],
            promotype: 'Simple Promotion',
            promotionval: '',
            value: 0
        },
        locationselection: {
            stores : []
        }
    };


    getPromotionInformation(): any {
        return this.promotionInformation;
    }

    setTicketInformation(promotionInformation: any): void {
        this.promotionInformation = promotionInformation;
    }

    // complete() {
    //     this.paymentComplete.next(this.ticketInformation.personalInformation);
    // }
}
