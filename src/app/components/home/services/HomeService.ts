import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class HomeService {
    // Propiedades
    // private apiUrl = 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json';
    private apiUrl = '/api/Equipos';

    information: any;
    //Constructor
    constructor(private http: HttpClient ){
    }

    // finAll():Observable<any[]>{
    //     return of(this.http.get<any[]>(this.apiUrl).toPromise);
    // }

    finAll(){
        return this.http.get(this.apiUrl);
    }

    
}