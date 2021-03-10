import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersServices{

    // URL de la Api
    private userURL = 'https://localhost:44355/api/User';

    // Contructor de la Clase
    constructor(private _http: HttpClient){
    }

    async validateUser(username: string, password: string){
        try{
            let url = `${this.userURL}?logIn=${username}&&password=${password}`;
            console.log(url);
            return await this._http.get(url)
            .toPromise()
            .catch(error => this.handlerError(error));
        }catch(e){
            this.handlerError(e);
        }
    }

    handlerError(status: HttpErrorResponse){
        console.log(status);
        if(status)
        if(status.status === 400){
            console.log(status);
            console.log(status.error);
        }else if (status.status === 404 || status.status == 500){
            console.log(status.error);
        }
    }
}