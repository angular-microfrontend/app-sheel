import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

import { LinksService } from "./core/links.service";
import { LinkInterface } from "./shared/link-interface";
import loadScript from "./shared/load-scripts";

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

    this.currentLang = "id";
    window.localStorage.setItem("lang", this.currentLang);
    this.translate.use(this.currentLang);

    this.data = {
      common: {
        translation: this.currentLang,
      },
      header: {
        name: "from app shell",
      },
    };

    setTimeout(() => {
      document
        .querySelector("halodoc-header-root")
        .setAttribute("data", JSON.stringify(this.data));
    }, 0);
  }

  ngOnInit() {}
}
