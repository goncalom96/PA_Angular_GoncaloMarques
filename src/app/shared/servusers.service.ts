import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class ServusersService {

  private urlAPI = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  private processaErro(erro: HttpErrorResponse) {
    let mensagem="";
    if (erro.status!==404) {
      mensagem="Não foi possível estabelecer ligação com a API!";
    } else {
      mensagem="Ocorreu um erro.";
    }
    const error = new Error(mensagem);
    return throwError(() => error)
  }

  todosUsers() : Observable<User[]> {
    return this.http.get<User[]>(`${this.urlAPI}/users`)
      .pipe(
        catchError(this.processaErro)
      );
  }

  userInfo(id: number) : Observable<User> {
    return this.http.get<User>(`${this.urlAPI}/users/${id}`)
      .pipe(
        catchError(this.processaErro)
      );
  }


  validarUsers(email: string, senha: string): Observable<User | null> {
    const url = `${this.urlAPI}?email=${email}&senha=${senha}`;
    return this.http.get<User[]>(url)
    .pipe(
      catchError(this.processaErro),
      map(users => {
        let user = users.find(u => u.email === email && u.senha === senha);
        return user ? user : null;
      })
    );
  }
  
}
