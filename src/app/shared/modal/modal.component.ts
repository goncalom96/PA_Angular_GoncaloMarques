import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ServusersService } from 'src/app/shared/servusers.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  formUsers: FormGroup = new FormGroup({});
  @Output() user: EventEmitter<User> = new EventEmitter<User>();
  @Output() closeWindow : EventEmitter<string> = new EventEmitter();
  @Output() loginSuccess: EventEmitter<User> = new EventEmitter<User>();
  utilizadorExiste: boolean = true;

  constructor(private servusers: ServusersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.formUsers = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('',Validators.required),
    });
  }

  validar() {
    let loginData = this.formUsers.value;
    this.servusers.validarUsers(loginData.email, loginData.senha).subscribe(user => {
      if (user) {
        this.utilizadorExiste = true;
        this.user.emit(user);
        this.loginSuccess.emit(user);
      } else {
        this.utilizadorExiste = false;
        this.user.emit(undefined);
      }
    });
  
    this.formUsers.reset();
  }

  fechar() {
    this.closeWindow.emit();
  }

}
