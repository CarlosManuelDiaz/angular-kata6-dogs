import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private Http: HttpClient) {

  }

  public nuevoPerro(): Observable<any> {
    return this.Http.get('https://dog.ceo/api/breeds/image/random');
  }

}
