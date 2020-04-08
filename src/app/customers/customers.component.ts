import { Component, OnInit } from "@angular/core";
import loadScript, {
  passDataToComponent,
  propsChanged,
} from "../shared/load-scripts";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";

@Component({
  selector: "app-customer-module",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"],
})
export class CustomersComponent implements OnInit {
  data: any;
  dynamicScripts = ["/mfe/customer/customer-module.js"];

  constructor(private translate: TranslateService) {
    loadScript(this.dynamicScripts);
    this.data = {
      common: {
        translation: translate.currentLang,
      },
      customerData: {
        placeholderText: "Search by title / body",
      },
    };

    passDataToComponent(
      this,
      "halodoc-customer-module",
      this.data,
      this.dataRecieved
    );
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      const changedData = {
        ...this.data,
        common: {
          translation: event.lang,
        },
      };
      propsChanged("halodoc-customer-module", changedData);
    });
  }

  dataRecieved(context, value) {
    console.log("data recieved", value);
  }
}
