import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  estudiatesList:any[];
  constructor(private router: Router, private dataService: DataService) { 

    this.estudiatesList=[
      {
        id: 1,
        name:'Camilo Vargas',
        telefono: "3176655544",
        direccion: "carrera 39 # 48-21",
        color:'yellow',
        imagen: "assets/icon/Vargas.jpg"
      },
      {
        id: 2,
        name:'Daniel Muñoz',
        telefono: "3176478888",
        direccion: "Calle 39 # 08-27",
        color:'blue',
        imagen: "assets/icon/Munoz.jpg"
      },
      {
        id: 3,
        name:'Yerry Mina',
        telefono: "3172235555",
        direccion: "carrera 28 # 111-25",
        color:'red',
        imagen: "assets/icon/Mina.jpg"
      },
      {
        id: 4,
        name:'Jhon Lucumí',
        telefono: "3172235555",
        direccion: "carrera 28 # 111-25",
        color:'yellow',
        imagen: "assets/icon/Lucumi.jpg"
      }
      ,
      {
        id: 5,
        name:'Cristian Borja',
        telefono: "3172235555",
        direccion: "carrera 28 # 111-25",
        color:'blue',
        imagen: "assets/icon/Borja.jpg"
      }
      ,
      {
        id: 4,
        name:'Kevin Castaño',
        telefono: "3172235555",
        direccion: "carrera 28 # 111-25",
        color:'red',
        imagen: "assets/icon/KCastano.jpg" 
      }
      ,
      {
        id: 4,
        name:'Jefferson Lerma',
        telefono: "3172235555",
        direccion: "carrera 28 # 111-25",
        color:'yellow',
        imagen: "assets/icon/Lerma.jpg"
      }
      ,
      {
        id: 4,
        name:'Luis Díaz',
        telefono: "3172235555",
        direccion: "carrera 28 # 111-25",
        color:'blue',
        imagen: "assets/icon/LDiaz.jpg"
      }
      ,
      {
        id: 4,
        name:'James Rodríguez',
        telefono: "3172235555",
        direccion: "carrera 28 # 111-25",
        color:'red',
        imagen: "assets/icon/James.jpg"
      }
      ,
      {
        id: 4,
        name:'Jhon Arias',
        telefono: "3172235555",
        direccion: "carrera 28 # 111-25",
        color:'yellow',
        imagen: "assets/icon/JArias.jpg"
      }
      ,
      {
        id: 4,
        name:'Rafael Santos Borré',
        telefono: "3172235555",
        direccion: "carrera 28 # 111-25",
        color:'blue',
        imagen: "assets/icon/Vargas.jpg"
      }
    ];

  }

  irAPaginaPrincipal() {
    this.router.navigate(['/']); // Esta es la ruta de tu página principal
  }

  verDetalles(estudiante: any) {
    this.dataService.setEstudiante(estudiante);
    this.router.navigate(['/detalle-estudiante']);
  }

  ngOnInit() {
  }

}
