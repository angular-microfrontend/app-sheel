import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrdersComponent } from "./orders.component";
import { OrdersRoutingModule } from "./order-routing.module";

@NgModule({
  declarations: [OrdersComponent],
  imports: [CommonModule, OrdersRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [OrdersComponent]
})
export class OrdersModule {}
