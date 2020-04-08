import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomersComponent } from "./customers.component";
import { CustomerRoutingModule } from "./customer-routing.module";
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [CustomersComponent],
  imports: [CommonModule, CustomerRoutingModule, CoreModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [CustomersComponent],
})
export class CustomersModule {
  constructor() {}
}
