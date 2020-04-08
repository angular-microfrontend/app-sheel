import { Component, OnInit } from "@angular/core";
import loadScript from "../shared/load-scripts";

@Component({
  selector: "halodoc-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
})
export class OrdersComponent implements OnInit {
  constructor() {
    const dynamicScripts = ["http://localhost:2226/order-module.js"];
    loadScript(dynamicScripts);
  }

  headerChanged(event) {
    console.log("value is ", event.target.value);
  }

  ngOnInit(): void {}
}
