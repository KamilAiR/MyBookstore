import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDelComponent } from './book-del/book-del.component';
import { AuthorAddComponent } from './author-add/author-add.component';
import { AuthorDelComponent } from './author-del/author-del.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AuthorsComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    HomeComponent,
    BookAddComponent,
    BookDelComponent,
    AuthorAddComponent,
    AuthorDelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'books', component:BooksComponent},
      {path: 'authors', component:AuthorsComponent},
      {path: 'login', component:LoginComponent},
      {path: 'registration', component:RegistrationComponent},
      {path: 'home', component:HomeComponent},
      {path: 'book-add', component:BookAddComponent},
      {path: 'book-del', component:BookDelComponent},
      {path: 'author-add', component:AuthorAddComponent},
      {path: 'author-del', component:AuthorDelComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
