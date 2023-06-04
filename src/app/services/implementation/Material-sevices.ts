import { Observable, catchError, map, of } from "rxjs";
import { Material } from "src/app/core/models/Material.model";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateMaterrialFrom } from "src/app/core/forms.models/CreateMaterial";

@Injectable()
export class MaterialServices {
    private loginUrl = 'api/Material'
    constructor(private http: HttpClient) { }
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
        return this.http.post(this.loginUrl + '/create', datos, { headers })
            .pipe(
                map((reponse: any) => {
                    console.log(reponse);
                    if (reponse.status == 200) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }),
                catchError((error: HttpErrorResponse) => {
                    if (error.status == 200) {
                        return of(true)
                    }
                    else {
                        return of(false)
                    }
                })
            );
    }
    delete(id: string):Observable<boolean>
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.delete(this.loginUrl+"/Delete/"+id, {headers})
            .pipe(
                map((Response: any) => 
                {
                    return true;
                }),
                catchError((error: HttpErrorResponse) => {
                    if (error.status == 200) {
                        return of(true)
                    }
                    else {
                        return of(false)
                    }
                })
            )
    }

}