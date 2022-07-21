import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image?:string;
  public Titulo:string="Curso de Angular con Interpolacion";
  @Input() dataEntrante:any;

  constructor() { }

  ngOnInit(): void {
  }

}
