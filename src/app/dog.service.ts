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

  public nuevoPerro5Seg(): Observable<string> {
    return new Observable((subs) => {
      const interval = setInterval(() => {

        this.nuevoPerro().subscribe({
          next: val => {
            subs.next(val.message);
          }
        });

      }, 5000);
      return {
        unsubscribe() { clearInterval(interval);}
      };
    });
  }

}
