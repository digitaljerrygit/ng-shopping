import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { TvsComponent } from './tvs/tvs.component';
import { ComputersComponent } from './computers/computers.component';
import { AppliancesComponent } from './appliances/appliances.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'all',
    component: AllComponent,
  },
  {
    path: 'product-categories',
    component: CategoriesComponent,
  },
  {
    path: 'products/:id',
    component: ProductComponent,
  },
  {
    path: 'tvs',
    component: TvsComponent,
  },
  {
    path: 'computers',
    component: ComputersComponent,
  },
  {
    path: 'appliances',
    component: AppliancesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
