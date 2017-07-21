import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProductlistComponent} from './productlist/productlist.component';
import {ProductnewComponent} from './productnew/productnew.component';

const routes: Routes = [
  {path:'productlist', component:ProductlistComponent},
  {path:'productnew', component:ProductnewComponent},
  {path: 'products/new', component:ProductnewComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
