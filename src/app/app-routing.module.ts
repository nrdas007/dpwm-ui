import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PromoEventComponent } from './components/promo-event/promo-event.component';
import { PromoMaintainanceComponent } from './components/promotion/promo-maintainance/promo-maintainance.component';
import { PromotionModule } from './components/promotion/promotion.module';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'promoevent', component: PromoEventComponent },
  { path: 'promotion', loadChildren: './components/promotion/promotion.module#PromotionModule'},
  { path: 'promotionMaintenance', component: PromoMaintainanceComponent },
  { path: '**', redirectTo: '/404' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
