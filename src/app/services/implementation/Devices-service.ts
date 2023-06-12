import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, catchError, map, of } from "rxjs";
import { DeviceFormCreate } from "src/app/core/forms.models/deviceCreate.form";
import { Devices } from "src/app/core/models/Devices.model";
import { GeneralResponse } from "src/app/core/models/GenralResponseEnp.model";

@Injectable()
export class DevicesSevice
{
    private loginUrl = 'api/Devices'
    constructor(private http: HttpClient,private toastr: ToastrService) { }

    get(): Observable<Devices[]> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get<Devices[]>(this.loginUrl, { headers })
            .pipe(
                map((reponse: Devices[]) => {

                    return reponse;

                }),
                catchError(() => { return [] })
            );
    }
    add(datos: DeviceFormCreate): Observable<boolean> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<GeneralResponse>(this.loginUrl + '/Create', datos, { headers })
            .pipe(
                map((reponse: GeneralResponse) => {
                    if (reponse.success) {
                        this.toastr.success(reponse.message,"Operacion exitosa");
                        return true;
                    }
                    else {
                        this.toastr.error(reponse.message,"Error");
                        return false;
                    }
                }),
                catchError((error: HttpErrorResponse) => {
                    
                    this.toastr.error(error.error.error,"Error")
                    return of(false)
                })
            );
    }
}