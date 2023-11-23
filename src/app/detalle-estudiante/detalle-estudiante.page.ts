import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detalle-estudiante',
  templateUrl: './detalle-estudiante.page.html',
  styleUrls: ['./detalle-estudiante.page.scss'],
})
export class DetalleEstudiantePage implements OnInit {

  estudiante: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.estudiante$.subscribe(estudiante => {
      this.estudiante = estudiante;
  
      // Verifica si el objeto estudiante está definido
      if (!this.estudiante) {
        console.error('Objeto estudiante no encontrado en el servicio.');
        // Puedes manejar el caso en el que no se proporciona el objeto estudiante
      }
    });
  }
}
