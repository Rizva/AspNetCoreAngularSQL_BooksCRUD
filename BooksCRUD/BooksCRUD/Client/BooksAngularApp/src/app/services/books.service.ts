import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Genre } from '../models/genre';
import { Book } from '../models/book';
import { Author } from '../models/author';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7037/api';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  // 2. Create the options object
  private options = {
    headers: this.headers
  };

  public booksSignal: WritableSignal<Book[]> = signal([]);
  public genresSignal: WritableSignal<Genre[]> = signal([]);
  public authorsSignal: WritableSignal<Author[]> = signal([]);

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  // Method to call the API
  fetchBooks(): void {
    this.http.get<Book[]>(this.apiUrl + '/Books',this.options).pipe(
      // Catch errors and return an empty array if the call fails
      catchError(error => {
        this._snackBar.open("Error while fetching books", '', { duration: 5000, panelClass: ['error-snackbar'] });
        return of([]);
      })
    ).subscribe(books => {
      // Set the signal's value when data is received
      this.booksSignal.set(books);
    });
  }

  postBook(data: Book): void {
    this.http.post<Book>(this.apiUrl + '/Books', JSON.stringify(data), this.options).pipe(
      // Catch errors and return an empty array if the call fails
      catchError(error => {
        this._snackBar.open("Error while posting book", '', { duration: 5000, panelClass: ['error-snackbar'] });
        return of([]);
      })
    ).subscribe(response => {
      this._snackBar.open("New book successfuly created!", '', { duration: 5000, panelClass: ['success-snackbar'] });
    });
  }

  editBook(id: string, data: any): void {
    this.http.put<Book>(this.apiUrl + '/Books/' + id, data, this.options).pipe(
      // Catch errors and return an empty array if the call fails
      catchError(error => {
        this._snackBar.open("Error while updating book", '', { duration: 5000, panelClass: ['error-snackbar'] });
        return of([]);
      })
    ).subscribe(response => {
      this._snackBar.open("Book successfully edited!", '', { duration: 5000, panelClass: ['success-snackbar'] });
    });
  }

  deleteBook(id: string): void {
    this.http.delete<Book>(this.apiUrl + '/Books/' + id, this.options).pipe(
      // Catch errors and return an empty array if the call fails
      catchError(error => {
        this._snackBar.open("Error while deleting book", '', { duration: 5000, panelClass: ['error-snackbar'] });
        return of([]);
      })
    ).subscribe(response => {
      this._snackBar.open("Book sucessfuly deleted!", '', { duration: 5000, panelClass: ['success-snackbar'] });
    });
  }

  fetchGenres(): void {
    this.http.get<Genre[]>(this.apiUrl + '/Genres', this.options).pipe(
      // Catch errors and return an empty array if the call fails
      catchError(error => {
        this._snackBar.open("Error while fetching genres", '', { duration: 5000, panelClass: ['error-snackbar'] });
        return of([]);
      })
    ).subscribe(genres => {
      // Set the signal's value when data is received
      this.genresSignal.set(genres);
    });
  }

  fetchAuthors(): void {
    this.http.get<Author[]>(this.apiUrl + '/Authors', this.options).pipe(
      // Catch errors and return an empty array if the call fails
      catchError(error => {
        this._snackBar.open("Error while fetching authors", '', { duration: 5000, panelClass: ['error-snackbar'] });
        return of([]);
      })
    ).subscribe(authors => {
      // Set the signal's value when data is received
      this.authorsSignal.set(authors);
    });
  }

  postAuthor(data: Author): void {
    this.http.post<Author>(this.apiUrl + '/Authors', data, this.options).pipe(
      // Catch errors and return an empty array if the call fails
      catchError(error => {
        this._snackBar.open("Error while posting author", '', { duration: 5000, panelClass: ['error-snackbar'] });
        return of([]);
      })
    ).subscribe(response => {
      this._snackBar.open("New author successfuly created!", '', { duration: 5000,panelClass: ['success-snackbar'] });
    });
  }

  editAuthor(id: string, data: any): void {
    this.http.put<Author>(this.apiUrl + '/Authors/' + id, data, this.options).pipe(
      // Catch errors and return an empty array if the call fails
      catchError(error => {
        this._snackBar.open("Error while updating author", '', { duration: 5000, panelClass: ['error-snackbar'] });
        return of([]);
      })
    ).subscribe(response => {
      this._snackBar.open("Author successfully edited!", '', { duration: 5000, panelClass: ['success-snackbar'] });
    });
  }

  deleteAuthor(id: string): void {
    this.http.delete<Author>(this.apiUrl + '/Authors/' + id, this.options).pipe(
      // Catch errors and return an empty array if the call fails
      catchError(error => {
        this._snackBar.open("Error while deleting author", '', { duration: 5000, panelClass: ['error-snackbar'] });
        return of([]);
      })
    ).subscribe(response => {
      this._snackBar.open("Author sucessfuly deleted!", '', { duration: 5000, panelClass: ['success-snackbar'] });
    });
  }
}
