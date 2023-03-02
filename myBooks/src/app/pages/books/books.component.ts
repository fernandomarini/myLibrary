import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[]
 
    constructor( ){

    this.books = [];
   
    
    let book001 = new Book(1,1,"La Bestia","Ciencia Ficcion","E.King",19,"https://http2.mlstatic.com/D_NQ_NP_657353-MLA44342368528_122020-O.jpg");
    let book002 = new Book(2,2,"Sombras","Ciencia Ficcion","E.King",19,"https://images-na.ssl-images-amazon.com/images/I/81c8No6mSPL.jpg?w=144");
    let book003 = new Book(3,3,"La Bestia","Ciencia Ficcion","E.King",19,"https://media.revistagq.com/photos/5f6c9b117458e06669aaa2b0/master/w_1643,h_2500,c_limit/6%20resplandor.jpg");
    let book004 = new Book(4,4,"Sombras","Ciencia Ficcion","E.King",19,"https://http2.mlstatic.com/D_NQ_NP_657353-MLA44342368528_122020-O.jpg");
    let book005 = new Book(1,1,"La Bestia","Ciencia Ficcion","E.King",19,"https://images-na.ssl-images-amazon.com/images/I/81c8No6mSPL.jpg?w=144");
    let book006 = new Book(2,2,"Sombras","Ciencia Ficcion","E.King",19,"https://media.revistagq.com/photos/5f6c9b117458e06669aaa2b0/master/w_1643,h_2500,c_limit/6%20resplandor.jpg");
    let book007 = new Book(3,3,"La Bestia","Ciencia Ficcion","E.King",19,"https://images-na.ssl-images-amazon.com/images/I/81c8No6mSPL.jpg?w=144");
    let book008 = new Book(4,4,"Sombras","Ciencia Ficcion","E.King",19,"https://http2.mlstatic.com/D_NQ_NP_657353-MLA44342368528_122020-O.jpg");

    this.books.push(book001);
    this.books.push(book002);
    this.books.push(book003);
    this.books.push(book004);
    this.books.push(book005);
    this.books.push(book006);
    this.books.push(book007);
    this.books.push(book008); 
  


            
  };  

  public dateBooks ( newId_bool: HTMLInputElement, newId_user: HTMLInputElement, newTitle: HTMLInputElement, 
    newType: HTMLInputElement, newAuthor: HTMLInputElement, newPrice: HTMLInputElement, newPhoto: HTMLInputElement){
      
    let newBook = new Book (  newId_bool.valueAsNumber, 
                              newId_user.valueAsNumber,
                              newTitle.value, 
                              newType.value, 
                              newAuthor.value, 
                              newPrice.valueAsNumber, 
                              newPhoto.value ) 

    this.books.push(newBook);
  };   



};

