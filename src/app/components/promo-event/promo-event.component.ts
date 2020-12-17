import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { promoEvent } from 'src/app/event';

@Component({
  selector: 'app-promo-event',
  templateUrl: './promo-event.component.html',
  styleUrls: ['./promo-event.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PromoEventComponent implements OnInit {
  // data: TreeNode[];
  eventDialog = false;
  submitted = false;
  eventTypes = [];
  selectedType = '';
  selectedStatus = '';
  events: any = [];
  promoEvent: promoEvent = {};
  selectedEvents: promoEvent[] = [];
  minDate: Date;
  

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.minDate = new Date();
    this.events =  [
        {
          'id': '1000',
          'code': 'f230fh0g3',
          'name': 'Bamboo Watch',
          'desc': 'hjghjjxkzl jcnkjscnksl',
          'type': 'X-mas',
          'sdate': '',
          'edate': '',
          'status': 'Active'
        },
        {
          'id': '1001',
          'code': 'f230fh0g4',
          'name': 'Bamboo ',
          'desc': 'hjghjjxkzl sfgfs jcnkjscnksl',
          'type': 'School Holidays',
          'sdate': '',
          'edate': '',
          'status': 'Inactive'
        },
        {
          'id': '1002',
          'code': 'f230fh0g3',
          'name': 'Bamboo Watch',
          'desc': 'hjghjjxkzl jcnkjscnksl',
          'type': 'X-mas',
          'sdate': '',
          'edate': '',
          'status': 'Active'
        },
        {
          'id': '1003',
          'code': 'f230fh0g3',
          'name': 'Bamboo Watch',
          'desc': 'hjghjjxkzl jcnkjscnksl',
          'type': 'X-mas',
          'sdate': '',
          'edate': '',
          'status': 'Active'
        },
        {
          'id': '1004',
          'code': 'f230fh0g3',
          'name': 'Bamboo Watch',
          'desc': 'hjghjjxkzl jcnkjscnksl',
          'type': 'X-mas',
          'sdate': '',
          'edate': '',
          'status': 'Active'
        },
        {
          'id': '1005',
          'code': 'f230fh0g3',
          'name': 'Bamboo Watch',
          'desc': 'hjghjjxkzl jcnkjscnksl',
          'type': 'X-mas',
          'sdate': '',
          'edate': '',
          'status': 'Active'
        },
        {
          'id': '1006',
          'code': 'f230fh0g3',
          'name': 'Bamboo Watch',
          'desc': 'hjghjjxkzl jcnkjscnksl',
          'type': 'X-mas',
          'sdate': '',
          'edate': '',
          'status': 'Active'
        },
        {
          'id': '1007',
          'code': 'f230fh0g3',
          'name': 'Bamboo Watch',
          'desc': 'hjghjjxkzl jcnkjscnksl',
          'type': 'X-mas',
          'sdate': '',
          'edate': '',
          'status': 'Active'
        },
        {
          'id': '1008',
          'code': 'f230fh0g3',
          'name': 'Bamboo Watch',
          'desc': 'hjghjjxkzl jcnkjscnksl',
          'type': 'X-mas',
          'sdate': '',
          'edate': '',
          'status': 'Active'
        },
        {
          'id': '1009',
          'code': 'f2390fh0g3',
          'name': 'Bamboo Watch',
          'desc': 'hjghjjxkzl jcnkjscnksl',
          'type': 'X-mas',
          'sdate': '',
          'edate': '',
          'status': 'Active'
        },
        {
          'id': '1010',
          'code': 'f230fh0g3',
          'name': 'Bamboo Watch',
          'desc': 'hjghjjxkzl jcnkjscnksl',
          'type': 'X-mas',
          'sdate': '',
          'edate': '',
          'status': 'Active'
        },
        {
          'id': '1011',
          'code': 'f230fh0g3',
          'name': 'Bamboo Watch',
          'desc': 'hjghjjxkzl jcnkjscnksl',
          'type': 'X-mas',
          'sdate': '',
          'edate': '',
          'status': 'Active'
        },
        {
          'id': '1012',
          'code': 'f230fh0gda3',
          'name': 'Bamboo Watch424',
          'desc': 'hjghjjxkzl jfsfscnkjscnksl',
          'type': 'X-mas',
          'sdate': '',
          'edate': '',
          'status': 'Active'
        },
        {
          'id': '1013',
          'code': 'f230fh0tetg3',
          'name': 'Bamboo Watch42',
          'desc': 'hjghjjxkzl dgg jcnkjscnksl',
          'type': 'School Holidays',
          'sdate': '',
          'edate': '',
          'status': 'Active'
        },
        {
          'id': '1014',
          'code': 'f230fh0g3',
          'name': 'Bamboo Watch24',
          'desc': 'hjghjjxkzl jcnkjscnksl dgfdhfd',
          'type': 'X-mas',
          'sdate': '',
          'edate': '',
          'status': 'Inactive'
        }
      ];
  }

  ngOnInit(): void {
    this.selectedStatus = 'active';
    //   this.data = [{
    //     label: 'Root',
    //     children: [
    //         {
    //             label: 'Child 1'
    //         },
    //         {
    //             label: 'Child 2'
    //         }
    //     ]
    // }];
  }
  onChangeType(): void {

  }
  onChangeStatus(): void {

  }

  openNew(): void {
    this.promoEvent = {};
    this.submitted = false;
    this.eventDialog = true;
  }

  deleteSelectedEvents(): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected events?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.events = this.events.filter((val: any) => !this.selectedEvents.includes(val));
        this.selectedEvents = [];
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'events Deleted', life: 3000 });
      }
    });
  }

  editEvent(promoEv: promoEvent): void {
    this.promoEvent = { ...promoEv };
    this.eventDialog = true;
  }

  deleteEvent(promoEv: promoEvent): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + promoEv.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.events = this.events.filter((val: any) => val.id !== promoEv.id);
        this.promoEvent = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Event Deleted', life: 3000 });
      }
    });
  }

  hideDialog(): void {
    this.eventDialog = false;
    this.submitted = false;
  }

  saveEvent(): void {
    this.submitted = true;

    if (this.promoEvent.name && this.promoEvent.name.trim()) {
      if (this.promoEvent.id) {
        this.events[this.findIndexById(this.promoEvent.id)] = this.promoEvent;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Event Updated', life: 3000 });
      }
      else {
        this.promoEvent.id = this.createId();
        this.events.push(this.promoEvent);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Event Created', life: 3000 });
      }

      this.events = [...this.events];
      this.eventDialog = false;
      this.promoEvent = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
