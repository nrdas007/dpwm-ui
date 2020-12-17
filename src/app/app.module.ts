import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { AdalService } from 'adal-angular4';

import {OrganizationChartModule} from 'primeng/organizationchart';
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
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import {SidebarModule} from 'primeng/sidebar';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { AppComponent } from './app.component';
import { AppWraperComponent } from './components/app-wraper/app-wraper.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { PromoEventComponent } from './components/promo-event/promo-event.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { PromoCreationComponent } from './components/promotion/promo-creation/promo-creation.component';
import { PromoMaintainanceComponent } from './components/promotion/promo-maintainance/promo-maintainance.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { PromotionService } from './components/promotion/promotionservice';
import { DateFormaterPipe } from './common/pipes/date-formater.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppWraperComponent,
    AppHeaderComponent,
    PromoEventComponent,
    PromotionComponent,
    PromoCreationComponent,
    PromoMaintainanceComponent,
    DashboardComponent,
    AppFooterComponent,
    DateFormaterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    OrganizationChartModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    InputTextareaModule,
    TableModule,
    ToastModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    TabViewModule,
    AccordionModule,
    SidebarModule,
    NgxSpinnerModule,
    StepsModule

  ],
  providers: [
    MessageService,
    NgxSpinnerService,
    AdalService,
    ConfirmationService,
    PromotionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
