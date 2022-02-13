import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";
import { PostPictureInterface } from "src/app/interfaces/interfaces";
import { PictureStoreService } from "src/app/store/picture-store.service";

@Component({
  selector: "app-create-picture",
  templateUrl: "./create-picture.component.html",
  styleUrls: ["./create-picture.component.css"],
})
export class CreatePictureComponent implements OnInit {
  picture: PostPictureInterface = {
    description: "",
  };

  pictureForm: any;

  constructor(
    private picturesStore: PictureStoreService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.pictureForm = this.formBuilder.group({
      description: [
        this.picture.description,
        [Validators.required, Validators.minLength(4)],
      ],
      picture: ["", [Validators.required]],
    });
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.pictureForm.get("picture").setValue(file);
    }
  }

  get f() {
    return this.pictureForm.controls;
  }

  onSudmit() {
    const pictureData = new FormData();
    pictureData.append(
      "description",
      this.pictureForm.get("description").value
    );
    pictureData.append("picture", this.pictureForm.get("picture").value);
    this.picturesStore.postPictureStore(pictureData);
  }
}
