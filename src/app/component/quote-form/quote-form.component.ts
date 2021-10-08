import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from 'src/app/quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quotes("","","",0,0,new Date());
  @Output() add = new EventEmitter<Quotes>();

  addQuote(){
this.add.emit(this.newQuote);
this.newQuote = new Quotes("","","",0,0,new Date());
}

  constructor() { }

  ngOnInit(): void {
  }

}
