import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { usuario } from '../modelo/usuario';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumoapiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  url: string = 'http://127.0.0.1:5000/';

  constructor(private http: HttpClient) {}

  public login(usuario: string, contraseña: string): Observable<any> {
    const body = {
      rut: usuario,
      contraseña: contraseña
    };

    return this.http.post<any>(this.url + 'login', body, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Error en la solicitud:', error);
    return throwError(error); // 
  }
}
