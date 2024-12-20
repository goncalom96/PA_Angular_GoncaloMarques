import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { ServusersService } from 'src/app/shared/servusers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {


  @Output() idUser = new EventEmitter<number>();
  listaUsers : User[] = [];
  user: User | undefined;
  mostraModal : boolean = false;
  isLoggedIn: boolean = false;


  constructor(private servusers: ServusersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  lerTodosUsers() {
    this.servusers.todosUsers().subscribe({
      next: users => {
        this.listaUsers = users;
      },
      error: erro => alert(erro.message),
      complete: () => console.log("Fim do processamento")
    });
  }
  
  mostraLogin(event: Event) : void {
    event.preventDefault();
      this.mostraModal=true;
      this.isLoggedIn = false;
  }

  fecharLogin() {
    this.mostraModal = false;
  }
  
  login(user: User | undefined) {
    if (user) {
      this.isLoggedIn = true;
      this.mostraModal = false;
      this.user = user;
    }
    else {
      this.isLoggedIn = false;
      this.mostraModal = true;
    }
  }
  
  logout() {
    this.isLoggedIn = false;
    this.user = undefined;
  }
  
  adminUser(): boolean {
    return this.isLoggedIn && this.user?.userType === 'admin';
  }
  
  userAutenticado() : boolean {
    return this.isLoggedIn && this.user?.ativo === true;
  }
}