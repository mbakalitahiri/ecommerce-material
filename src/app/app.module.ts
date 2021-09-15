import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceComponent } from './../service/service.component';
import { MaterialModule } from './../material/material.module';
import { StoreModule } from './../store/store.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './../shared/shared.module';

import {
  StyleUtils,
  StylesheetMap,
  LayoutStyleBuilder,
  MediaMarshaller,
  LayoutAlignStyleBuilder,
  FlexStyleBuilder,
} from '@angular/flex-layout';
import {
  ɵMatchMedia,
  BreakPointRegistry,
  PrintHook,
} from '@angular/flex-layout/core';

@NgModule({
  declarations: [AppComponent, ServiceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule,
    FlexLayoutModule,
    SharedModule,
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
    ɵMatchMedia,
    BreakPointRegistry,
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
