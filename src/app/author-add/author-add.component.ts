import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.css']
})
export class AuthorAddComponent implements OnInit {

  first_name =""
  last_name =""
  birth_date =""

  showError = false; 

  constructor(private router : Router, private authorsService : AuthorsService) { }

  addAuthor() {
    if (this.first_name == "" || this.last_name == "")
    { 
        this.showError = true; 
    }
    else 
    {
      this.authorsService.addNewAuthor(this.first_name, this.last_name, this.birth_date).subscribe(p => {
      console.log(p);
      this.router.navigate(['/authors']);
    });
   }
  }

  closeErrorMessage()
  {
    this.showError = false;
  }


  ngOnInit(): void {
  }
}
