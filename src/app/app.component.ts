import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'holamundo';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:'Video 1', subtitulo:'Subtitulo Video 1', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWwG8V5-dnMWIbHU_pXCHr-R4i2ajbsszow&usqp=CAU'},
      {titulo:'Video 2', subtitulo:'Subtitulo Video 2', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKl1avkY3zbAUJffBXgWKRiCYSRhZ01Mqdw&usqp=CAU'},
      {titulo:'Video 3', subtitulo:'Subtitulo Video 3', image:'https://i.ytimg.com/vi/2OHbjep_WjQ/maxresdefault.jpg'}
    ]
  }
}
