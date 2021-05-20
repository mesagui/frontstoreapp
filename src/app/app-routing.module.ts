import { ProductNewComponent } from './pages/products/product-new/product-new.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './pages/employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './pages/employees/employee-detail/employee-detail.component';
import { EmployeeNewComponent } from './pages/employees/employee-new/employee-new.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },

  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-new', component: EmployeeNewComponent },
  { path: 'employee-detail/:id', component: EmployeeDetailComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-new', component: ProductNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
