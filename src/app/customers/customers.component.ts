import { Component, OnInit } from "@angular/core";
import loadScript from "../shared/load-scripts";

@Component({
  selector: "app-customer-module",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"]
})
export class CustomersComponent {
  constructor() {
    const dynamicScripts = ["/mfe/customer/customer-module.js"];
    loadScript(dynamicScripts);
  }
}
