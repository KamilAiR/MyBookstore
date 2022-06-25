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

  deleteAuthor(id : number, i : number) {
    this.authorsService.deleteAuthor(id).subscribe( p => {
      this.authors.splice(i,1);
    })
  }

  ngOnInit(): void {
    //this.authors =this.authorsService.getAuthors();
    this.authorsService.getAuthors().subscribe(p => {
      this.authors = p.data;
    });
  }

}
