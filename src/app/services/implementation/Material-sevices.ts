import { Observable, catchError, map, of } from "rxjs";
import { Material } from "src/app/core/models/Material.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateMaterrialFrom } from "src/app/core/forms.models/CreateMaterial";

@Injectable()
export class MaterialServices{
    private loginUrl = 'api/Material'
    constructor(private http: HttpClient) { }
    getMaterials(): Observable<Material[]> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get<Material[]>(this.loginUrl, { headers })
        .pipe(
            map((reponse: Material[]) => {
                
                return reponse;
                  
            }),
            catchError(() => {return []})
        );
    }
    addMateria(datos:CreateMaterrialFrom):Observable<boolean>
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<any>(this.loginUrl, datos, {headers})
        .pipe(
            map((reponse: any) => {
                    return true;
            }),
            catchError(() => of(false))
        );
    }
}