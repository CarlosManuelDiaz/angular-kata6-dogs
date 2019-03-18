import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.scss']
})
export class PerroComponent implements OnInit {

  public rutaImagenPerro: string;
  public miSubs: Subscription;

  constructor(private dogService: DogService) {

  }

  ngOnInit() {}


  public nuevo() {
     const parar = setInterval(() => {
      this.dogService.nuevoPerro().subscribe({
        next: val => {
          this.rutaImagenPerro = val.message;
        }
      });
    }, 5000);
     return {
      unsubscribe() {clearInterval(parar); }
    };
  }
  public parar() {
    this.nuevo().unsubscribe();
  }
}


