import { Observable, catchError, map } from "rxjs";
import { Material } from "src/app/core/models/Material.model";
import { IMaterialService } from "../interfaces/Material-interface-sevices";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MaterialServices implements IMaterialService{
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
}