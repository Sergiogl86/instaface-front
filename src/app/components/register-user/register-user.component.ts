import { Component, OnInit } from "@angular/core";
import { Register } from "src/app/interfaces/interfaces";
import { Validators, FormBuilder } from "@angular/forms";
import { UserStoreService } from "src/app/store/user-store.service";

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.css"],
})
export class RegisterUserComponent implements OnInit {
  register: Register = {
    nombre: "",
    nombreUsuario: "",
    password: "",
  };

  registerForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private userStore: UserStoreService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombre: [
        this.register.nombre,
        [Validators.required, Validators.minLength(4)],
      ],
      nombreUsuario: [
        this.register.nombreUsuario,
        [Validators.required, Validators.minLength(4)],
      ],
      password: [
        this.register.password,
        [Validators.required, Validators.minLength(4)],
      ],
      userImg: ["", [Validators.required]],
    });
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registerForm.get("userImg").setValue(file);
    }
  }

  get f() {
    return this.registerForm.controls;
  }

  onSudmit() {
    const RegisterData = new FormData();
    RegisterData.append("nombre", this.registerForm.get("nombre").value);
    RegisterData.append(
      "nombreUsuario",
      this.registerForm.get("nombreUsuario").value
    );
    RegisterData.append("password", this.registerForm.get("password").value);
    RegisterData.append("userImg", this.registerForm.get("userImg").value);
    this.userStore.registerUserStore(RegisterData);
  }
}
