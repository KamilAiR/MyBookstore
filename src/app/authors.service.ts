import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  // getAuthors(){
  //   return of ([
  //     {id: 1, first_name: "Kornel", last_name: "Makuszynski", birth_date: "08-01-1884"},
  //     {id: 2, first_name: "Henryk", last_name: "Sienkiewicz", birth_date: "15-11-1916"},
  //     {id: 3, first_name: "Adam", last_name: "Mickiewicz", birth_date: "24-12-1798"},
  //   ]);
  // }

  getAuthors() {
    return this.httpClient.get<any>(environment.apiUrl + '/api/authors');
  }

  addNewAuthor(  first_name :string, last_name :string, birth_date : string) {
    return this.httpClient.post(environment.apiUrl + '/api/authors', { 
      first_name : first_name,
      last_name : last_name,
      birth_date : birth_date
    })
  }

  deleteAuthor(id : number){
     return this.httpClient.delete(`${environment.apiUrl}api/authors/${id}`);                         
  }

  constructor(private httpClient : HttpClient) { }
}
