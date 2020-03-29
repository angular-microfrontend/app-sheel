import { Component } from "@angular/core";

import { LinksService } from "./core/links.service";
import { LinkInterface } from "./shared/link-interface";

@Component({
  selector: "halodoc-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app-shell";
  constructor(private linkService: LinksService) {
    linkService.getLinks().subscribe((links: LinkInterface[]) => {
      window.localStorage.setItem("links", JSON.stringify(links));
    });
    this.loadScript();
  }

  loadScript() {
    const dynamicScripts = [
      "http://localhost:2222/header-module.js",
      "http://localhost:2223/aside-module.js"
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement("script");
      node.src = dynamicScripts[i];
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
  }
}
