import { Component, Input, OnInit } from "@angular/core";
import { PictureInterface } from "src/app/interfaces/interfaces";

@Component({
  selector: "app-picture-box-home",
  templateUrl: "./picture-box-home.component.html",
  styleUrls: ["./picture-box-home.component.css"],
})
export class PictureBoxHomeComponent implements OnInit {
  @Input() picture!: PictureInterface;

  messageList: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openListButton() {
    this.messageList = true;
  }

  closeListButton() {
    this.messageList = false;
  }
}
