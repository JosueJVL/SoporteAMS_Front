import { Component, OnInit } from '@angular/core';
import { UserService } from './user.component.service';
import { EmployeeModel, EmployeesModel } from './model/user.model';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // Constructor de la Clase
  constructor(private _userService: UserService) {
   }

  // Propiedades
  public showMessagesInvalidate: boolean = false;
  public enableEmployee: boolean = false;
  public loadInformation: boolean = false;
  public showMessages: boolean = false;
  public employee: EmployeesModel[] = [];
  public informationEmployeeaaaa: Array<any>[];

  public columnsEmployee: Array<any> = [
    {
      headerName: 'Id del Empleado',
      field: 'IdEmployee',
    },
    {
      headerName: 'Id de Nomina',
      field: 'IdNomina',
    },
    {
      headerName: 'Id del Puesto',
      field: 'IdPuesto',
    },
    {
      headerName: 'Nombre',
      field: 'Name',
    },
    {
      headerName: 'Ap Paterno',
      field: 'LastName',
    },
    {
      headerName: 'Ap Materno',
      field: 'SecondLastName',
    }
  ];

  public columnsUser: Array<any> = [
    {
      headerName: 'Id del Empleado',
    },
    {
      headerName: 'Id del Usuario',
    },
    {
      headerName: 'LogIn',
    },
    {
      headerName: 'Status',
    },
    {
      headerName: 'FechaActualizacion',
    }
  ];

  public columnsEmployeeBusiness: Array<any> = [
    {
      headerName: 'Id del Empleado',
      field: 'IdEmployee',
    },
    {
      headerName: 'Codigo Sucursal',
      field: 'IdBusiness',
    },
    {
      headerName: 'Descripción',
      field: 'DescriptionBusiness',
    },
    {
      headerName: 'Tipo Asignación',
      field: 'TypeAssignment',
    },
    {
      headerName: 'Fecha Actualización',
      field: 'Date',
    }
  ];

  public columnsUsersBusiness: Array<any> = [
    {
      headerName: 'Id del Usuario',
      field: 'IdUser',
    },
    {
      headerName: 'Codigo Sucursal',
      field: 'IdBusiness',
    },
    {
      headerName: 'Descripción',
      field: 'BusinessName',
    }
  ];

  public columnsRolUser: Array<any> = [
    {
      headerName: 'Id del Usuario',
      field: 'IdUser',
    },
    {
      headerName: 'Id del Rol',
      field: 'IdRol',
    },
    {
      headerName: 'Descripción del Rol',
      field: 'NameRol',
    }
  ];
  

  ngOnInit(): void {
  }

  // onKey(event: any) { // without type info
  //   this.valuesPipe += event.target.value + ' | ';
  //   this.values = event.target.value ;
  // }

  // onKey(value: string) { 
  //     this.valuesPipe += value + ' | ';
  //     this.values = value ;
  // }

  onKey(value: string) { 
    if(value.toString().valueOf == null || value == ""){
      this.showMessagesInvalidate = true;
      this.enableEmployee = false;
      this.showMessages = true;
      this.loadInformation = false;
    }
    else {
      this.showMessagesInvalidate = false;
      this.loadInformation = true;
      this.enableEmployee = false;
      this._userService.getinformationEmployee(value).toPromise()
      .then(result => {
        if(result == null){
          Swal.fire({
            title:'Empleado',
            text: 'No se encontro Informacion del Empleado',
            icon: 'warning',
            allowOutsideClick: false
        });
        Swal.isLoading();
          this.showMessagesInvalidate = true;
          this.enableEmployee = false;
          this.showMessages = false;
          this.loadInformation = false;
        }
        else{
          
          this.showMessagesInvalidate = false;
          this.enableEmployee = true;
          this.loadInformation = false;
          this.employee = result;
          console.log(result[1]);
          console.log(result);
          console.log(this.employee[1]);
          this.loadInformation = false;
        }
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          title:'Empleado',
          text: error,
          icon: 'error',
          allowOutsideClick: false
        });
        Swal.isLoading();
      });
    }
  }

}
