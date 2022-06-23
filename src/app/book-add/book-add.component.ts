import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  
  title = "";
  number_of_pages = 0; 
  description = "";


constructor( private router : Router, private booksService : BooksService  ) { }

  addBook() {
    this.booksService.addNewBook(this.title, this.number_of_pages, this.description);
    this.router.navigate(['/books']);
  }

  ngOnInit(): void {
  }

}
