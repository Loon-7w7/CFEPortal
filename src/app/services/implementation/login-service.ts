import { Observable, catchError, map, of } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm } from "src/app/core/forms.models/loginForm";
import { ILoginServices } from "../interfaces/login-interface-services";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginService implements ILoginServices {
    private loginUrl = 'api/Auth'
    constructor(private http: HttpClient) { }
    isLogin(): Observable<boolean> {
        var token = localStorage.getItem("token");
        if (token != null && token != "") {
            const headers = new HttpHeaders().set('Authorization', "Bearer " + token);
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