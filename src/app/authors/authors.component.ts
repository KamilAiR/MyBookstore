import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})

export class AuthorsComponent implements OnInit {

  authors : {id: number; first_name: string; last_name: string; birth_date:string;} [] = [ ]; 
  constructor(private authorsService : AuthorsService) { }

  deleteAuthor( id : number) {
    this.authorsService.deleteAuthor(id);
  }

  ngOnInit(): void {
    //this.authors =this.authorsService.getAuthors();
    this.authorsService.getAuthors().subscribe((p) => {
      this.authors = p
    });
  }

}
