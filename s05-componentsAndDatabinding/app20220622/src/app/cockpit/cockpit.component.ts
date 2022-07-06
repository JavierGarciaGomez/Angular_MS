import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { server } from "../app.component";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  constructor() {}

  newServerName: string;
  newServerContent: string;

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @ViewChild("serverContentInput", { static: false })
  serverContentInput: ElementRef;

  ngOnInit(): void {}
  // 74 local reference

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.newServerContent,
    });
  }
  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent,
  //   });
  // }

  // onBlueprintadded() {
  //   this.blueprintCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent,
  //   });
  // }
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
