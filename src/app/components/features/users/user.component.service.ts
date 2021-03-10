import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { EmployeesModel } from './model/user.model';
import { catchError, delay, map } from 'rxjs/operators';

@Injectable()
export class UserService{

    // Propiedades

    //URL de la API
    private userUrl = 'https://localhost:44355/api/Employee';
    item = new EmployeesModel();

    // Contructor
    constructor(private  _http : HttpClient){
    }

    getEmployees(value: string){
        let url = `${this.userUrl}?uni=${value}`;
        return this._http.get(url)
        .pipe(
            map((data: EmployeesModel) => {
                return data;
            }),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    //Metodo que Obtiene la Informacion del Empleado
    getinformationEmployee(value: string){
        let url = `${this.userUrl}?uni=${value}`;
        return this._http.get(url)
        .pipe(
            map((response: EmployeesModel) => this.crearArreglo(response)
            ),
            // delay(1000),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    // Crea el Objeto de Respuesta en un Arreglo
    private crearArreglo(responseObj: EmployeesModel){
        console.log(responseObj);
        
        if( responseObj.Employee == null ){
            return null;
        }

        const employee: EmployeesModel[] = [];

        Object.keys( responseObj ).forEach(key => {
            const identifier = responseObj[key];
            // console.log(identifier);
            identifier.id = key;
            employee.push( identifier );
            // if(identifier.id != null)
            // {
            //     console.log(identifier);
            //     identifier.id = key;
            //     employee.push( identifier );
            // }
        });

        return employee;
    }
}