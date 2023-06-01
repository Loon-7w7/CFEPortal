import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Aquí es donde puedes agregar la lógica de autenticación
    // Por ejemplo, puedes obtener el token del localStorage y agregarlo al encabezado Authorization

    const token = localStorage.getItem('token');

    if (token) {
      // Clona la solicitud y agrega el encabezado de autorización
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      // Pasa la solicitud clonada al siguiente controlador
      return next.handle(authRequest);
    }

    // Si no hay token, simplemente pasa la solicitud original al siguiente controlador sin modificaciones
    return next.handle(request);
  }
}
