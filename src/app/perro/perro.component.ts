import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Observable, Subscription } from 'rxjs';
import { Perro } from '../perro';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.scss']
})
export class PerroComponent implements OnInit {

  public rutaImagenPerro: string;
  private miSubsc: Subscription;

  ngOnInit() {}
 constructor(private dogService: DogService) {}



  public comienzaPerro(): void {
  this.miSubsc = this.dogService.nuevoPerro5Seg().subscribe({
    next: (val: string) => this.rutaImagenPerro = val
  });
}

  public paraPerro(): void {
  this.miSubsc.unsubscribe();
}

}


