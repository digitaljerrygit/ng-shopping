import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AllComponent } from './all/all.component';
import { ProductsService } from './services/products.service';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { TvsComponent } from './tvs/tvs.component';
import { ComputersComponent } from './computers/computers.component';
import { AppliancesComponent } from './appliances/appliances.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AllComponent,
    CategoriesComponent,
    ProductComponent,
    TvsComponent,
    ComputersComponent,
    AppliancesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
