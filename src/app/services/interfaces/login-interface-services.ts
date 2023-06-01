import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { LoginForm } from "../../core/forms.models/loginForm";


export const Login_Endpoint_services = new InjectionToken<ILoginServices>('Login_Endpoint_services');
export interface ILoginServices
{
    login(formcontrols: LoginForm): Observable<boolean>;
    isLogin():Observable<boolean>;
    logout():void;
}