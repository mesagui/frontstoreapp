import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { ProductNewComponent } from './pages/products/product-new/product-new.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { EmployeeListComponent } from './pages/employees/employee-list/employee-list.component';
import { DataTablesModule } from "angular-datatables";
import { EmployeeNewComponent } from './pages/employees/employee-new/employee-new.component';
import { EmployeeDetailComponent } from './pages/employees/employee-detail/employee-detail.component';

registerLocaleData(es);

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, EmployeeNewComponent, EmployeeDetailComponent, ProductListComponent,
  ProductNewComponent ,ProductDetailComponent],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent],
})
export class AppModule {}
