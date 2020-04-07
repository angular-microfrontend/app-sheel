import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

import { LinksService } from "./core/links.service";
import { LinkInterface } from "./shared/link-interface";
import loadScript, { passDataToComponent } from "./shared/load-scripts";

@Component({
  selector: "halodoc-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  currentLang: string;
  data: any;
  links: LinkInterface[];

  constructor(
    private linkService: LinksService,
    private translate: TranslateService
  ) {
    this.linkService.getLinks().subscribe((links: LinkInterface[]) => {
      this.links = links;
    });

    const dynamicScripts = ["http://localhost:2222/header-module.js"];
    loadScript(dynamicScripts);
    this.translationChanged("id");

    this.data = {
      common: {
        translation: this.currentLang,
      },
      header: {
        name: "from app shell",
      },
    };

    passDataToComponent(
      this,
      "halodoc-header-root",
      this.data,
      this.dataRecieved
    );
  }

  ngOnInit() {}

  dataRecieved(context, value) {
    context.translationChanged(value.detail.translationId);
  }

  translationChanged(langid) {
    this.currentLang = langid;
    this.translate.use(langid);
    window.localStorage.setItem("lang", this.currentLang);
  }
}
