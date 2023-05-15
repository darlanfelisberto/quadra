import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder} from "@angular/forms";
import {MessageValidationComponent} from "../../shared/message-validation/message-validation.component";
import {Usuario} from "../Usuario";
import { InputTextModule } from 'primeng/inputtext';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit{
  form!: FormGroup;

  constructor(private userService:UserService) {
  }
  ngOnInit() {
      this.form = new FormGroup({
        // username:new FormControl('',[Validators.required]),
        nome: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.email,Validators.required,Validators.minLength(5)])
      });
  }

  submit(){
    console.log(this.form);
    if(!this.form.valid){
      return;
    }
    let user: Usuario = new Usuario();
    user.idUsuario = 1;
    user.nome = this.form.value.nome;
    user.email = this.form.value.email;

    this.userService.save(user);
    return;
  }

}
