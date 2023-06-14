import { Observable, catchError, map, of } from "rxjs";
import { Material } from "src/app/core/models/Material.model";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponseBase } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateMaterrialFrom } from "src/app/core/forms.models/CreateMaterial";
import { GeneralResponse } from "src/app/core/models/GenralResponseEnp.model";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class MaterialServices {
    private loginUrl = 'api/Material'
    constructor(private http: HttpClient,private toastr: ToastrService) { }
    getMaterials(): Observable<Material[]> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get<Material[]>(this.loginUrl, { headers })
            .pipe(
                map((reponse: Material[]) => {

                    return reponse;

                }),
                catchError(() => { return [] })
            );
    }
    addMateria(datos: CreateMaterrialFrom): Observable<boolean> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<GeneralResponse>(this.loginUrl + '/create', datos, { headers })
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
    addMultiMateria(datos: CreateMaterrialFrom[]): Observable<boolean> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<GeneralResponse>(this.loginUrl + '/CreateMulti', datos, { headers })
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
    delete(id: string): Observable<boolean> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.delete<GeneralResponse>(this.loginUrl + "/Delete/" + id, { headers })
            .pipe(
                map((reponse: GeneralResponse) => {
                    if (reponse.success) {
                        this.toastr.success(reponse.message,"Operacion exitosa");
                        return true
                    }
                    else
                    {
                        this.toastr.error(reponse.message,"Error");
                        return false
                    }
                    
                }),
                catchError((error: HttpErrorResponse) => {
                    this.toastr.error(error.error.error,"Error")
                    return of(false)
                })
            )
    }

}