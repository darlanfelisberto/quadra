import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder} from "@angular/forms";
import {MessageValidationComponent} from "../../shared/message-validation/message-validation.component";
import {Usuario} from "../../model/Usuario";
import { InputTextModule } from 'primeng/inputtext';
import {UserService} from "../../service/user.service";
import { PermissaoService } from 'src/app/service/permissao.service';
import { Permissao } from 'src/app/model/Permissao';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
  providers: [MessageService]
})
export class FormUserComponent implements OnInit{
  form!: FormGroup;

  teste?:any;
  listPermissao!:Permissao[];
  user: Usuario = new Usuario();

  constructor(private userService:UserService,private permService:PermissaoService,private messageService:MessageService) {
  }
  ngOnInit() {
      this.form = new FormGroup({
        // username:new FormControl('',[Validators.required]),
        nome: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.email,Validators.required,Validators.minLength(5)]),
        password: new FormControl('',[Validators.required]),
      });
      this.permService.listAlla((resp)=>this.listPermissao = resp);
  }

  submit(){
    console.log(this.user.listPermissoes);
    if(!this.form.valid){
      return;
    }

    if(this.user.listPermissoes.length ==0){
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Selecione Uma Permissão' });
      return;
    }
    
    // this.user.idUsuario = 1;

    this.userService.save(this.user);
    return;
  }

}
