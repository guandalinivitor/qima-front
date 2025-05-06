import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ProductListComponent,
  ]
})
export class ProductsModule { }
