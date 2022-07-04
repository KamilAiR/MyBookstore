import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  authorToAddId = 0; 
  // getBooks(){
  //   return of ([
  //     {id: 1, title: "W pustyni i w puszczy", number_of_pages: 350, description: "Powiesc przygodowa dla mlodziezy", author_id: 2},
  //     {id: 2, title: "Przygody Koziołka Matołka", number_of_pages: 50, description: "Historyjka obrazkowa dla dzieci", author_id: 1},
  //     {id: 3, title: "Dziady cz. III", number_of_pages: 200, description: "Utwór dramatyczny należący do cyklu dramatów", author_id: 3}
  //   ]);
  // }

  public setAuthorId(id : number)
  {
    this.authorToAddId = id;
  }


  getBooks() {
    return this.httpClient.get<any>(environment.apiUrl + '/api/books');
  }

  addNewBook( title : string, number_of_pages : number, description : string) {
    return this.httpClient.post(`${environment.apiUrl}/api/authors/${this.authorToAddId}/books`, { 
      title : title,
      number_of_pages: number_of_pages,         
      description : description
    })
  }

  deleteBook(id : number) {
    return this.httpClient.delete(`${environment.apiUrl}/api/books/${id}`);
  }

  constructor( private httpClient : HttpClient ) { }
}
