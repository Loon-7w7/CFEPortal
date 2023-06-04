import { Observable, catchError, map, of } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm } from "src/app/core/forms.models/loginForm";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
    private loginUrl = 'api/Auth'
    constructor(private http: HttpClient) { }
    logout(): void {
        localStorage.removeItem('token');
    }
    isLogin(): Observable<boolean> {
        var token = localStorage.getItem("token");
        if (token != null && token != "") {
            const headers = new HttpHeaders().set('Content-Type', 'application/json');
            return this.http.post<boolean>(this.loginUrl+"/Validate", { headers })
                .pipe(
                    map((reponse: boolean) => {
                        if (reponse) {
                            
                            return true;
                        }
                        else {
                            localStorage.setItem('token', "");
                            return false;
                        }
                    }),
                    catchError(() => of(false))
                );


        }
        else {
            return of(false);
        }
    }
    login(formcontrols: LoginForm): Observable<boolean> {
        var datos =
        {
            username: formcontrols.user,
            password: formcontrols.passaword
        }
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<any>(this.loginUrl, datos, { headers })
            .pipe(
                map((reponse: any) => {
                    if (reponse.token) {
                        localStorage.setItem('token', reponse.token);
                        return true;
                    }
                    else {
                        return false;
                    }
                }),
                catchError(() => of(false))
            );

    }

}