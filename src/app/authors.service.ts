import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  getAuthors(){
    return of ([
      {id: 1, first_name: "Kornel", last_name: "Makuszynski", birth_date: "08-01-1884"},
      {id: 2, first_name: "Henryk", last_name: "Sienkiewicz", birth_date: "15-11-1916"},
      {id: 3, first_name: "Adam", last_name: "Mickiewicz", birth_date: "24-12-1798"},
    ]);
  }

  constructor() { }
}
