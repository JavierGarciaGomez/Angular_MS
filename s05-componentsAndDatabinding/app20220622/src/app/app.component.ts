import { Component } from "@angular/core";

export interface server {
  type: "server" | "blueprint";
  name: string;
  content: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor() {
    console.log("adiós", this.serverElements);
  }
  serverElements: server[] = [
    { type: "server", name: "Testserver", content: "Just a test" },
    { type: "server", name: "Testserver", content: "Just a test" },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "blueprint",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
}
