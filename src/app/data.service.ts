import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private estudianteSource = new BehaviorSubject<any>(null);
  estudiante$ = this.estudianteSource.asObservable();

  setEstudiante(estudiante: any) {
    this.estudianteSource.next(estudiante);
  }
}
