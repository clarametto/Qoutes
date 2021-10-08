import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[]=[

    new Quotes( " t doesn’t matter who you are, where you come from. The ability to triumph begins with you – always." , "Oprah Winfrey ", "Austia Macauley publisher", 0 , 0 , new Date ( 2015, 1 , 4) ),
    new Quotes( "Never crave to be known for someone you are not. Be who you are in the day and when the lights are off, remain true" , "Myles Munroe.", "Book genius publisher", 0 , 0 , new Date ( 1968, 6 , 10) ),
    new Quotes( "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty." , "Maya Angelou", "Austia Macauley publisher", 0 , 0 , new Date ( 2020, 6 , 8) ),
    new Quotes( "If you’re having a bad day just remember that facial expressions speak louder than words.." , "cookie lylon", "Austia Macauley publisher", 0 , 0 , new Date ( 1968, 6 , 28) ),

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
