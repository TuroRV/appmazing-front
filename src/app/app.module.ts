import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule, MatRadioModule, MatSelectModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { FormsModule } from '@angular/forms';
import { ProductsNewComponent } from './products-new/products-new.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { ProductsUpdateComponent } from './products-update/products-update.component';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';
import { ProductsDeleteComponent } from './products-delete/products-delete.component';
import { ChartsComponent } from './charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    ContactHomeComponent,
    ContactDetailComponent,
    ProductsHomeComponent,
    ProductsDetailComponent,
    ContactNewComponent,
    ProductsNewComponent,
    ContactUpdateComponent,
    ProductsUpdateComponent,
    ContactDeleteComponent,
    ProductsDeleteComponent,
    ChartsComponent
  ],
  entryComponents: [ContactDeleteComponent, ProductsDeleteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    NgxChartsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
