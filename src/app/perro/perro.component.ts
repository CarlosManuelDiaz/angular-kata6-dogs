import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Observable, ObjectUnsubscribedError } from 'rxjs';
import { Perro } from '../perro';

@Component({
  selector: "app-perro",
  templateUrl: "./perro.component.html",
  styleUrls: ["./perro.component.scss"]
})
export class PerroComponent implements OnInit {
  public perros: Array<Perro>;

  public rutaImagenPerro: string;

  constructor(private dogService: DogService) {}

  ngOnInit() {}

  nuevoperro() {
    setInterval(() => {
      this.dogService.nuevoPerro().subscribe({
        next: val => {
          this.rutaImagenPerro = val.message;
        }
      });
    }, 5000);
    return {
      unsubscribe() {}
    };
  }
}

