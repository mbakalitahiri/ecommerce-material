/* tslint:disable:quotemark */
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CartSummaryComponent } from "./cartSummary/cartSummary.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [FooterComponent, HeaderComponent, CartSummaryComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [],
})
export class SharedModule {}
