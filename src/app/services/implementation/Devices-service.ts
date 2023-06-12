import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";
import { Devices } from "src/app/core/models/Devices.model";

@Injectable()
export class DevicesSevice
{
    private loginUrl = 'api/Devices'
    constructor(private http: HttpClient) { }

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
}