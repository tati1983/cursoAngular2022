import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJa6FfXLs570aEkn3ujBWt3yCWYkM-X4jF8Q&usqp=CAU';
  public Titulo: string = 'Curso de pija';
  constructor() { }

  ngOnInit(): void {
  }

}
