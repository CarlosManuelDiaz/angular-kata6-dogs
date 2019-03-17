import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerroComponent } from './perro/perro.component';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private perros: Array<PerroComponent> = [];

  constructor(private Http: HttpClient) {

  }

  public nuevoPerro(): Observable<any> {
    return this.Http.get('https://dog.ceo/api/breeds/image/random');
  }

}
