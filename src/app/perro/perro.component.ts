import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Observable, ObjectUnsubscribedError, Subscription } from 'rxjs';
import { Perro } from '../perro';

@Component({
  selector: "app-perro",
  templateUrl: "./perro.component.html",
  styleUrls: ["./perro.component.scss"]
})
export class PerroComponent implements OnInit {
  public rutaImagenPerro: string;
  private miSubsc: Subscription;

  constructor(private dogService: DogService) {}

  ngOnInit() {}

  public comienzaPerro(): void {
    this.miSubsc = this.nuevoperro().subscribe();
  }

  public paraPerro(): void {
    this.miSubsc.unsubscribe();
  }

  private nuevoperro(): Observable<void> {
    return new Observable(() => {
      const interval = setInterval(() => {

        this.dogService.nuevoPerro().subscribe({
          next: val => {
            this.rutaImagenPerro = val.message;
          }
        });

      }, 5000);
      return {
        unsubscribe() { clearInterval(interval) }
      };
    });
  }
}

