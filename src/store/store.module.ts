/* Modulos */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ModelModule } from '../model/model.module';
import { CartDetaillComponent } from './cartDetail/cartDetail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CounterDirective } from './directives/counter.directive';
import { HomeComponent } from './home/home.component';
import { ProductDetaillsComponent } from './product-detaills/product-detaills.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { StoreComponent } from './store.component';
import { StoreRoutingmodule } from './store.routing.module';
import { MaterialModule } from '../material/material.module';

import {
  DefaultLayoutGapDirective,
  FlexLayoutModule,
} from '@angular/flex-layout';

import {
  StyleUtils,
  StylesheetMap,
  LayoutStyleBuilder,
  MediaMarshaller,
  LayoutAlignStyleBuilder,
  FlexStyleBuilder,
} from '@angular/flex-layout';
import {
   BreakPointRegistry,
  PrintHook,
} from '@angular/flex-layout/core';

/*Components*/
/* Directivas */
@NgModule({
  declarations: [
    CounterDirective,
    StoreComponent,
    CartDetaillComponent,
    ProductPageComponent,
    CheckoutComponent,
    ProductDetaillsComponent,
    HomeComponent,
    ProductsListComponent,
   ],
  imports: [
    ModelModule,
    FormsModule,
    StoreRoutingmodule,
    FormsModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    StoreComponent,
    CartDetaillComponent,
    CheckoutComponent,
    CounterDirective,
  ],
  providers: [
    PrintHook,
    StyleUtils,
    StyleSheet,
    StylesheetMap,
    LayoutAlignStyleBuilder,
    LayoutStyleBuilder,
    FlexStyleBuilder,
    MediaMarshaller,
     BreakPointRegistry,
  ],
})
export class StoreModule {}
