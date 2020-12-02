import { Component, OnInit, ViewChild } from '@angular/core';
import { Information } from './model/home.model';
import { HomeService } from './services/HomeService';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
    //Propiedades privadas
    columnDefs: any;
    defaultColDef: any;
    columnTypes: any;
    rowData: any;
    @ViewChild('myGrid') myGrid: AgGridAngular;

    // Constructor de la Clase
    // Servicio @HomeService que obtiene la Informacion de las Sucursales
    constructor(private homeService: HomeService){
        this.columnDefs = [
            {
              headerName: 'N° Sucursal',
              field: 'BusinessId',
              // cellStyle: { backgroundColor: 'red' }
            },
            {
              headerName: 'Nombre de la Sucursal',
              field: 'BusinessDescription',
            },
            {
              headerName: 'IP',
              field: 'Ip',
              type: 'numberColumn',
            },
            {
              headerName: 'Version Actual App',
              field: 'VersionActual',
              type: 'numberColumn',
            },
            {
              headerName: 'Version Actual DB',
              field: 'VersionActualBD',
              type: 'numberColumn',
            },
            {
              headerName: 'Fecha Registro',
              field: 'FechaActualizacion',
            },
            {
              headerName: 'Fecha Actualizacion',
              field: 'FechaRegistro',
              // type: ['dateColumn', 'nonEditableColumn'],
            }
          ];


          this.defaultColDef = {
            width: 300,
            editable: false,
            filter: 'agTextColumnFilter',
            floatingFilter: true,
            resizable: true,
          };

          this.columnTypes = {
            numberColumn: {
              width: 140,
              filter: 'agNumberColumnFilter',
            }
          }
          //   nonEditableColumn: { editable: false },
          //   dateColumn: {
          //     filter: 'agDateColumnFilter',
          //     filterParams: {
          //       comparator: function(filterLocalDateAtMidnight, cellValue) {
          //         var dateParts = cellValue.split('/');
          //         var day = Number(dateParts[0]);
          //         var month = Number(dateParts[1]) - 1;
          //         var year = Number(dateParts[2]);
          //         var cellDate = new Date(year, month, day);
          //         if (cellDate < filterLocalDateAtMidnight) {
          //           return -1;
          //         } else if (cellDate > filterLocalDateAtMidnight) {
          //           return 1;
          //         } else {
          //           return 0;
          //         }
          //       },
          //     },
          //   },
          // };
    }


    ngOnInit(){
      console.log('Inicio - ngOnInit');
      this.homeService.finAll()
          .subscribe(data => {
            console.log(data);
            this.rowData = data;
          }
      );
      console.log('Fin - ngOnInit');
    }

    // Investigar para que esta funcion y el html
    //(gridReady)="onGridReady($event)"
    // onGridReady(params){
    //     this.gridApi = params.api;
    //     this.gridColumnApi = params.columnApi;
    //     this.homeService.finAll()
    //       .subscribe(data => {
    //         console.log(data);
    //         this.rowData = data;
    //     });
    // }
}


