import { Component, OnInit } from '@angular/core';
import { UsersServices } from './user.component.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _serviceUser: UsersServices) { }

  public username: string;
  public passwordUser: string;
  public isActived: boolean;
  public cdigoSucursal: number;

  ngOnInit(): void {
  }

  validateUser(){
    console.log(this.isActived);
    if (this.username == null){
      return Swal.fire({
          title:'Usuario',
          text: 'Favor de ingresar el Usuario y/o Contraseña',
          icon: 'warning',
          confirmButtonColor: '#9ccc65',
          confirmButtonText: 'Aceptar!',
          allowOutsideClick: false
      });
    }
    
    if(this.passwordUser === null || this.passwordUser == undefined){
      Swal.fire({
        title:'Usuario',
        text: 'Favor de ingresar el Usuario y/o Contraseña',
        icon: 'warning',
        confirmButtonColor: '#9ccc65',
        confirmButtonText: 'Aceptar!',
        allowOutsideClick: false
      });
    }else{
      this._serviceUser.validateUser(this.username, this.passwordUser)
        .then(result => {
          if(result){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'La contraseña del Usuario es Correcto',
              showConfirmButton: false,
              timer: 2500
            });
          }else{
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'La contraseña del Usuario es Incorrecta, favor de verificar',
              showConfirmButton: false,
              timer: 2500
            });
          }
          console.log(result);
        });
    }
  }

}
