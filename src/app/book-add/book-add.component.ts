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
  author_id = 0;

  showError = false;
constructor( private router : Router, private booksService : BooksService  ) { }

  setAuthorID(id: number)
  {
    this.author_id = id; 
  }
  closeErrorMessage()
  {
    this.showError = false;
  }

  addBook() {

    if ( this.title == "" )
    {
      this.showError = true;
    }
    else if ( this.number_of_pages <=0)
    {
      this.showError = true;
    }
    else {
      this.booksService.addNewBook(this.title, this.number_of_pages, this.description).subscribe ( p => {
        console.log(p);
        this.router.navigate(['/books']);
      }) 
    }
  }

  ngOnInit(): void {
  }

}
