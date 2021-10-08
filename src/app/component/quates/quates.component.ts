import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quates',
  templateUrl: './quates.component.html',
  styleUrls: ['./quates.component.css']
})
export class QuatesComponent implements OnInit {

  quotes:Quotes[]=[

    new Quotes( "The World is changed by Your Example not Opinion" , "Paulo Coelho ", "KlB", 0 , 0 , new Date ( 2018, 7 , 6) ),
    new Quotes( "Injustice anywhere is a threat to justice everywhere." , "Martin Luther King Jr.", "Letter from the Birmingham Jail", 0 , 0 , new Date ( 1968, 6 , 10) ),
    new Quotes( "Live as if you were to die tomorrow. Learn as if you were to live forever" , "Mahatma Gandhi", "Mahatma Gandhi", 0 , 0 , new Date ( 2020, 6 , 8) ),
    new Quotes( "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." , "Martin Luther King Jr", "A Testament of Hope", 0 , 0 , new Date ( 1968, 6 , 28) ),

  ]

  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.published = new Date(quote.published)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
