import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})

export class AuthorsComponent implements OnInit {

  authors : {id: number; first_name: string; last_name: string; birth_date:string;} [] = [ ]; 
  constructor(private authorsService : AuthorsService, private router : Router, private booksService : BooksService ) { }

  deleteAuthor(id : number, i : number) {
    this.authorsService.deleteAuthor(id).subscribe( p => {
      this.authors.splice(i,1);
    })
  }

  addBookToAuthor( id: number)
  {
    this.booksService.setAuthorId(id);
    this.router.navigate(['/book-add']);
  }

  ngOnInit(): void {
    //this.authors =this.authorsService.getAuthors();
    this.authorsService.getAuthors().subscribe(p => {
      this.authors = p.data;
    });
  }

}
