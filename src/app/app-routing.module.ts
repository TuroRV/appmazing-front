import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ProductsNewComponent } from './products-new/products-new.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { ProductsUpdateComponent } from './products-update/products-update.component';
import { ChartsComponent } from './charts/charts.component';


const routes: Routes = [
  {path: '', component: ChartsComponent},
  {path: 'contacts', component: ContactHomeComponent},
  {path: 'contact/new', component: ContactNewComponent},
  {path: 'contact/:id', component: ContactDetailComponent},
  {path: 'contact/update/:id', component: ContactUpdateComponent},
  {path: 'products', component: ProductsHomeComponent},
  {path: 'product/new', component: ProductsNewComponent},
  {path: 'product/:id', component: ProductsDetailComponent},
  {path: 'product/update/:id', component: ProductsUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
