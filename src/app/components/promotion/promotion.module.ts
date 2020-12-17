import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PromotionComponent } from './promotion.component';
import { SummaryComponent } from './promo-creation/summary/summary.component';
import { ProductVendorComponent } from './promo-creation/product-vendor/product-vendor.component';
import { PromoselectionComponent } from './promo-creation/promoselection/promoselection.component';
import { LocationselectionComponent } from './promo-creation/locationselection/locationselection.component';
import { WorkflowComponent } from './promo-creation/workflow/workflow.component';


import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import {SidebarModule} from 'primeng/sidebar';
import {StepsModule} from 'primeng/steps';
import {TreeModule} from 'primeng/tree';
import {MenuItem} from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { PromotionService } from './promotionservice';


const routes: Routes = [
    {
        path: '', component: PromotionComponent,
        children: [
            { path: '', redirectTo: 'summary', pathMatch: 'full' },
            { path: 'summary', component: SummaryComponent },
            { path: 'product-vendor', component: ProductVendorComponent },
            { path: 'promoselection', component: PromoselectionComponent },
            { path: 'locationselection', component: LocationselectionComponent },
            { path: 'workflow', component: WorkflowComponent }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        CardModule,
        ButtonModule,
        DropdownModule,
        InputTextModule,
        CalendarModule,
        InputTextareaModule,
        TableModule,
        FormsModule,
        ToastModule,
        SliderModule,
        MultiSelectModule,
        ContextMenuModule,
        DialogModule,
        RadioButtonModule,
        InputNumberModule,
        ConfirmDialogModule,
        TabViewModule,
        AccordionModule,
        SidebarModule,
        StepsModule,
        TreeModule,
        RouterModule.forChild(routes),
    ],
    declarations: [SummaryComponent, ProductVendorComponent, PromoselectionComponent, LocationselectionComponent, WorkflowComponent],

    providers: [
        MessageService,
        NgxSpinnerService,
        ConfirmationService
    ]
})
export class PromotionModule { }
