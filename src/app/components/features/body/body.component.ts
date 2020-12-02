import { Component, OnInit, PipeTransform } from '@angular/core';
import { BodyService  } from './body.component.service';
import { BusinessInformation } from './models/body.model';
import { VersionModel } from './models/body.model.version';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { FilterPipe } from './body.pipe';
import { ResultFunc } from 'rxjs/internal/observable/generate';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [FilterPipe]
})
export class BodyComponent implements OnInit {

  //COntructor de la Clase
  constructor(private bodyService: BodyService) { }

  //Propiedades
  public searchText = '';
  public enable: boolean = true;
  public rowData: BusinessInformation[];
  public errorDescription: string;
  public versionModel: VersionModel;
  public versionDB: string;
  public versionCaja: string;
  public versionSucursal: string;
  public columns: Array<any> = [
    {
      headerName: 'N° Sucursal',
      field: 'BusinessId',
    },
    {
      headerName: 'Nombre de la Sucursal',
      field: 'BusinessDescription',
    },
    {
      headerName: 'Tipo',
      field: 'NombreEquipo',
    },
    {
      headerName: 'IP',
      field: 'Ip',
    },
    {
      headerName: 'Version Actual App',
      field: 'VersionActual',
    },
    {
      headerName: 'Version Actual DB',
      field: 'VersionActualBD',
    },
    {
      headerName: 'Fecha Registro',
      field: 'FechaActualizacion',
    },
    {
      headerName: 'Fecha Actualizacion',
      field: 'FechaRegistro',
    }
  ];

  ngOnInit(): void {
    this.getInf();
    this.getInfVersion();
  }

  getInf(){
    this.bodyService.finAllInf().toPromise()
    .then(result => {
        this.rowData = result;
        this.enable = true;
        console.log(result);


    })
    .catch(error =>{
      this.enable = false;
      this.errorDescription = "No se pudo cargar la información...";
    })
  }

  getInfVersion(){
    this.bodyService.getInfVersion().toPromise()
    .then(result => {
      this.versionModel = result;
      this.versionDB = this.versionModel.VersionBaseDatos;
      this.versionSucursal = this.versionModel.VersionSucursal;
      this.versionCaja = this.versionModel.VersionCaja;
    })
    .catch(error =>{
    })
  }
}