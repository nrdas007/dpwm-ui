import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PromotionService } from '../promotionservice';

@Component({
  selector: 'app-promo-maintainance',
  templateUrl: './promo-maintainance.component.html',
  styleUrls: ['./promo-maintainance.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PromoMaintainanceComponent implements OnInit {
  selectedPromotions: any[] = [];
  promotions: any[] = [];
  promotionInformation: any;
  defaultPromo: any = {};
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private router: Router, private promoService: PromotionService) { }

  ngOnInit(): void {
    this.defaultPromo = {
      name: '',
      description: '',
      promoEvent: '',
      status: '',
      sdate: '',
      edate: '',
      store: 'All Store'
  },
    this.promotions =  [
      {
        'id': '1000',
        'code': 'f230fh0g3',
        'name': 'Bamboo Watch',
        'desc': 'hjghjjxkzl jcnkjscnksl',
        'pevent': 'X-mas',
        'status': 'Active',
        'sdate': '20201025',
        'edate': '20210131',
        'store': 'All Store',
        'level': '',
        'promotionVal': '',
        'approvalStatus': ''
      },
      {
        'id': '1001',
        'code': 'f230fh0g4',
        'name': 'Bamboo ',
        'desc': 'hjghjjxkzl sfgfs jcnkjscnksl',
        'pevent': 'X-mas',
        'status': 'Active',
        'sdate': '20201020',
        'edate': '20210131',
        'store': 'All Store',
        'level': '',
        'promotionVal': '',
        'approvalStatus': ''
      },
      {
        'id': '1002',
        'code': 'f230fh0g3',
        'name': 'Bamboo Watch',
        'desc': 'hjghjjxkzl jcnkjscnksl',
        'pevent': 'X-mas',
        'status': 'Active',
        'sdate': '20201025',
        'edate': '20210131',
        'store': 'All Store',
        'level': '',
        'promotionVal': '',
        'approvalStatus': ''
      },
      {
        'id': '1003',
        'code': 'f230fh0g3',
        'name': 'Bamboo Watch',
        'desc': 'hjghjjxkzl jcnkjscnksl',
        'pevent': 'X-mas',
        'status': 'Active',
        'sdate': '20201028',
        'edate': '20210131',
        'store': 'All Store',
        'level': '',
        'promotionVal': '',
        'approvalStatus': ''
      },
      {
        'id': '1004',
        'code': 'f230fh0g3',
        'name': 'Bamboo Watch',
        'desc': 'hjghjjxkzl jcnkjscnksl',
        'pevent': 'X-mas',
        'status': 'Active',
        'sdate': '20201031',
        'edate': '20210131',
        'store': 'All Store',
        'level': '',
        'promotionVal': '',
        'approvalStatus': ''
      },
      {
        'id': '1005',
        'code': 'f230fh0g3',
        'name': 'Bamboo Watch',
        'desc': 'hjghjjxkzl jcnkjscnksl',
        'pevent': 'X-mas',
        'status': 'Active',
        'sdate': '20201031',
        'edate': '20210131',
        'store': 'All Store',
        'level': '',
        'promotionVal': '',
        'approvalStatus': ''
      },
      {
        'id': '1006',
        'code': 'f230fh0g3',
        'name': 'Bamboo Watch',
        'desc': 'hjghjjxkzl jcnkjscnksl',
        'pevent': 'X-mas',
        'status': 'Active',
        'sdate': '20201031',
        'edate': '20210131',
        'store': 'All Store',
        'level': '',
        'promotionVal': '',
        'approvalStatus': ''
      },
      {
        'id': '1007',
        'code': 'f230fh0g3',
        'name': 'Bamboo Watch',
        'desc': 'hjghjjxkzl jcnkjscnksl',
        'pevent': 'X-mas',
        'status': 'Active',
        'sdate': '20201024',
        'edate': '20210131',
        'store': 'All Store',
        'level': '',
        'promotionVal': '',
        'approvalStatus': ''
      },
      {
        'id': '1008',
        'code': 'f230fh0g3',
        'name': 'Bamboo Watch',
        'desc': 'hjghjjxkzl jcnkjscnksl',
        'pevent': 'X-mas',
        'status': 'Active',
        'sdate': '20201024',
        'edate': '20210131',
        'store': 'All Store',
        'level': '',
        'promotionVal': '',
        'approvalStatus': ''
      },
      {
        'id': '1009',
        'code': 'f2390fh0g3',
        'name': 'Bamboo Watch',
        'desc': 'hjghjjxkzl jcnkjscnksl',
        'pevent': 'X-mas',
        'status': 'Active',
        'sdate': '20201024',
        'edate': '20210131',
        'store': 'All Store',
        'level': '',
        'promotionVal': '',
        'approvalStatus': ''
      },
      {
        'id': '1010',
        'code': 'f230fh0g3',
        'name': 'Bamboo Watch',
        'desc': 'hjghjjxkzl jcnkjscnksl',
        'pevent': 'X-mas',
        'status': 'Active',
        'sdate': '20201021',
        'edate': '20210131',
        'store': 'All Store',
        'level': '',
        'promotionVal': '',
        'approvalStatus': ''
      },
      {
        'id': '1011',
        'code': 'f230fh0g3',
        'name': 'Bamboo Watch',
        'desc': 'hjghjjxkzl jcnkjscnksl',
        'pevent': 'X-mas',
        'status': 'Active',
        'sdate': '20201024',
        'edate': '20210131',
        'store': 'All Store',
        'level': '',
        'promotionVal': '',
        'approvalStatus': ''
      },
      {
        'id': '1012',
        'code': 'f230fh0gda3',
        'name': 'Bamboo Watch424',
        'desc': 'hjghjjxkzl jfsfscnkjscnksl',
        'pevent': 'X-mas',
        'status': 'Active',
        'sdate': '20201021',
        'edate': '20210131',
        'store': 'All Store',
        'level': '',
        'promotionVal': '',
        'approvalStatus': ''
      },
      {
        'id': '1013',
        'code': 'f230fh0tetg3',
        'name': 'Bamboo Watch42',
        'desc': 'hjghjjxkzl dgg jcnkjscnksl',
        'pevent': 'X-mas',
        'status': 'Active',
        'sdate': '20201026',
        'edate': '20210131',
        'store': 'All Store',
        'level': '',
        'promotionVal': '',
        'approvalStatus': ''
      },
      {
        'id': '1014',
        'code': 'f230fh0g3',
        'name': 'Bamboo Watch24',
        'desc': 'hjghjjxkzl jcnkjscnksl dgfdhfd',
        'pevent': 'X-mas',
        'status': 'Active',
        'sdate': '20201026',
        'edate': '20210131',
        'store': 'All Store',
        'level': '',
        'promotionVal': '',
        'approvalStatus': ''
      }
    ];
  }
  onChangeType(): void {

  }
  onChangeStatus(): void {

  }

  openNew(): void {
    this.promoService.promotionInformation.Summary = this.defaultPromo;
    this.router.navigate(['promotion/summary']);
  }

  deleteSelectedEvents(): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected events?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.promotions = this.promotions.filter((val: any) => !this.selectedPromotions.includes(val));
        this.selectedPromotions = [];
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Promotionss Deleted', life: 3000 });
      }
    });
  }

  editEvent(promoEv: any): void {
    this.promotionInformation = { ...promoEv };
    this.promoService.promotionInformation.Summary.name = this.promotionInformation.name;
    this.promoService.promotionInformation.Summary.description = this.promotionInformation.desc;
    this.promoService.promotionInformation.Summary.promoEvent = this.promotionInformation.pevent;
    this.promoService.promotionInformation.Summary.status = this.promotionInformation.status;
    this.promoService.promotionInformation.Summary.sdate = this.promotionInformation.sdate;
    this.promoService.promotionInformation.Summary.edate = this.promotionInformation.edate;
    this.promoService.promotionInformation.Summary.store = this.promotionInformation.store;
    this.router.navigate(['promotion/summary']);
  }

  deleteEvent(promoEv: any): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + promoEv.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.promotions = this.promotions.filter((val: any) => val.id !== promoEv.id);
        // this.promoEvent = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Promotion Deleted', life: 3000 });
      }
    });
  }


  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.promotions.length; i++) {
      if (this.promotions[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
