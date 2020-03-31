import { Component } from "@angular/core";

import { LinksService } from "./core/links.service";
import { LinkInterface } from "./shared/link-interface";
import loadScript from "./shared/load-scripts";

@Component({
  selector: "halodoc-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app-shell";
  links: LinkInterface[];

  constructor(private linkService: LinksService) {
    linkService.getLinks().subscribe((links: LinkInterface[]) => {
      this.links = links;
    });

    const dynamicScripts = ["http://localhost:2222/header-module.js"];
    loadScript(dynamicScripts);
  }
}
