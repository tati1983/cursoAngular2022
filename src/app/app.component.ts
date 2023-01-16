import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo: string;
  subtitulo: string;
  numero?: number;
}

//CON ? AVISAMOS QUE LA PROPIEDAD PUEDE SER NULA

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Que puto que soy!';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo: 'Video 1', subtitulo: 'Video 1', numero: 1},
      {titulo: 'Video 2', subtitulo: 'Video 2'},      {titulo: 'Video 3', subtitulo: 'Video 3'},
    ]
  }

}



