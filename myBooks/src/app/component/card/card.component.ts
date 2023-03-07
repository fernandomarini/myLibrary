import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksComponent } from 'src/app/pages/books/books.component';
import { __values } from 'tslib';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  
  @Output() elementoBorrar = new EventEmitter<Book>();

  @Input() bookPadre: Book;
  @Input() btnpar: boolean;
 

  constructor(){ }


  deleteBook(){

    let libroEliminar: Book;

    libroEliminar = new Book (  this.bookPadre.title,
                                this.bookPadre.type,
                                this.bookPadre.author,
                                this.bookPadre.price,
                                this.bookPadre.photo,
                                this.bookPadre.id_bool, 
                                this.bookPadre.id_user )
                                
    this.elementoBorrar.emit(libroEliminar);

  }



};

  
