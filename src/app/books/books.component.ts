import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books : {id: number; title: string; number_of_pages: number; description: string; author_id: number;}[] = [ ]
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    //this.books = this.booksService.getBooks(); 
    this.booksService.getBooks().subscribe((p) => {
      this.books = p
    });
  }

}
