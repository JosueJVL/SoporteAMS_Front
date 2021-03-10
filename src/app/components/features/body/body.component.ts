import { Component, OnInit, PipeTransform } from '@angular/core';
import { BodyService  } from './body.component.service';
import { BusinessInformation } from './models/body.model';
import { VersionModel } from './models/body.model.version';
import { FormControl } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { FilterPipe } from './body.pipe';
import { CacheService } from '../../../cache.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [FilterPipe]
})
export class BodyComponent implements OnInit {

  //Contructor de la Clase
  constructor(
    private bodyService: BodyService,
    private _cacheService: CacheService
  ) { }

  //Propiedades
  sub: Subscription;
  public searchText = '';
  public enable: boolean = true;
  public rowData: BusinessInformation[];
  public errorDescription: string;
  public versionModel = new VersionModel();
  public versionDB: string;
  public versionCaja: string;
  public versionSucursal: string;
  public columns: Array<any> = [
    {
      headerName: 'N° Sucursal',
      field: 'BusinessId',
    },
    {
      headerName: 'Descripción Sucursal',
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
      headerName: 'Versión App',
      field: 'VersionActual',
    },
    {
      headerName: 'Versión DB',
      field: 'VersionActualBD',
    },
    {
      headerName: 'Fecha Actualización',
      field: 'FechaActualizacion',
    },
    {
      headerName: 'Fecha Registro',
      field: 'FechaRegistro',
    }
  ];

  ngOnInit(): void {
    this.getInfVersion();
    this.getInformationBusinness();
  }

    /**
    // getInf(){
    //   // this.sub = this.bodyService.finAllInf().subscribe(
    //   //   data => {
    //   //     this.rowData = data
    //   //     this.enable = true;
    //   //   }
    //   // )

    //   this.bodyService.finAllInf().toPromise()
    //     .then(result => {
    //       this.rowData = result;
    //       this.enable = true;
    //     })
    //     .catch(error =>{
    //       this.enable = false;
    //       this.errorDescription = "No se pudo cargar la información...";
    //     })
    // }

    // let infSessionStorage = JSON.parse( sessionStorage.getItem("informationSucursal") );
    // if(infSessionStorage == null){
    //   this.bodyService.finAllInf().toPromise()
    //   .then(result => {
    //     this.rowData = result;
    //     this.enable = true;
    //     console.log(JSON.parse( sessionStorage.getItem("informationSucursal") ));
    //     sessionStorage.setItem("informationSucursal", JSON.stringify( result ));
    //     console.log("El localStorage no contiene informacion");
    //   })
    //   .catch(error =>{
    //     this.enable = false;
    //     this.errorDescription = "No se pudo cargar la información...";
    //   })
    // }
    // else{
    //   console.log("El localStorage contiene informacion");
    //   this.rowData = infSessionStorage;
    //   this.enable = true;
    //   console.log("Se cargo la informacion al data");
    // }
     */
  

  async getInfVersion(){
    await this.bodyService.getInfVersion().toPromise()
    .then(result => {
      this.versionModel = result;
      this.versionDB = this.versionModel.VersionBaseDatos;
      this.versionSucursal = this.versionModel.VersionSucursal;
      this.versionCaja = this.versionModel.VersionCaja;
    })
    .catch(error =>{
      this.errorDescription = "No se pudo cargar la información de las versiones...";
    })
  }

  getInformationBusinness(){
    debugger;
    const keyCache = this._cacheService.load("mexico");
    if(keyCache == null){
      console.log("Se limpia el cache")
      this.bodyService.getBusinessInformation()
      .toPromise()
      .then(
        response => {
          if(response != null)
          {
            this.rowData = response;
            this.enable = true;
            console.log(response);
            this._cacheService.save({data: response, key: "mexico", expirationMins: 5})
          }
        }
      )
      .catch(error =>{
        this.enable = false;
        this.errorDescription = "No se pudo cargar la información...";
      });
    }else{
      console.log("El cache se mantien vivo")
      this.rowData = keyCache;
    }
  }


  /**
  // ngOnDestroy(){
  //   console.log("ngOnDestroy");
  //   this.sub.unsubscribe();
  // }
 */


}
