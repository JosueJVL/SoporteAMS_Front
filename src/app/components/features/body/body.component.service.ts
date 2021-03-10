import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { BusinessInformation } from './models/body.model';
import { VersionModel } from './models/body.model.version';

@Injectable()
export class BodyService {
    // Propiedades
    // private apiUrl = '/api/Equipos';
    private equiposUrl = 'https://localhost:44355/api/Equipos';
    private versionUrl = 'https://localhost:44355/api/Version';

    //Constructor
    constructor(
        private http: HttpClient
    ){}

    getInfVersion():Observable<VersionModel>{
        return this.http.get<VersionModel>(this.versionUrl);
    }

    getBusinessInformation(){
        return this.http.get<any>(this.equiposUrl);
    }
}