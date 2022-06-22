import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  getBooks(){
    return of ([
      {id: 1, title: "W pustyni i w puszczy", number_of_pages: 350, description: "Powiesc przygodowa dla mlodziezy", author_id: 2},
      {id: 2, title: "Przygody Koziołka Matołka", number_of_pages: 50, description: "Historyjka obrazkowa dla dzieci", author_id: 1},
      {id: 3, title: "Dziady cz. III", number_of_pages: 200, description: "Utwór dramatyczny należący do cyklu dramatów", author_id: 3}
    ]);
  }
  constructor() { }
}
