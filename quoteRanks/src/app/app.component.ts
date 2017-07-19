import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  quotes = [
    {body:'Sup, I did the russia stuff', author:'Donald', rating: 0},
    {body: 'Sup I did benghazi', author:'Hillary', rating:0},
    {body: 'Sup, I did not vote', author:'danjardan', rating:0}
  ];
    createQuote(quote){
    console.log(quote);
    this.quotes.push(quote);
  }
}
