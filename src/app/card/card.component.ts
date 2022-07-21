import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string="http://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release_0.png";
  public Titulo:string="Curso de Angular con Interpolacion"
  constructor() { }

  ngOnInit(): void {
  }

}
