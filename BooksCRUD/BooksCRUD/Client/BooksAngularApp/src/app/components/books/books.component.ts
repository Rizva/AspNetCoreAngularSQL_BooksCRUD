import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../../services/books.service';
import { Book } from '../../models/book';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditAuthorComponent } from '../authors/create-edit-author/create-edit-author.component';
import { CreateEditBookComponent } from './create-edit-book/create-edit-book.component';
import { MatIconModule } from '@angular/material/icon';
import { DeleteBookComponent } from './delete-book/delete-book.component';
export enum Mode {
  Create = 'CREATE',
  Edit = 'EDIT'
}

@Component({
  selector: 'app-books',
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  displayedColumns: string[] = ['id', 'title', 'isbn', 'publicationYear', 'description', 'author', 'actions'];
  books: Signal<Book[]>;
  constructor(private apiService: ApiService, private readonly dialog: MatDialog) {
    this.books = this.apiService.booksSignal;
  }
  ngOnInit(): void {
    // Fetch books on component initialization
    this.apiService.fetchBooks();
  }

  openCreateEditBook(mode: string, row?: Book) {
    const dialogData = {
      mode: mode,
      passedData: row
    }
    const dialogRef = this.dialog.open(CreateEditBookComponent, { data: dialogData });
    dialogRef.afterClosed().subscribe(result => {
      this.apiService.fetchBooks();
    });
  }

  createAuthor(mode: string) {
    const dialogData = {
      mode: mode
    }
    const dialogRef = this.dialog.open(CreateEditAuthorComponent, { data: dialogData });
    dialogRef.afterClosed().subscribe(result => {
      this.apiService.fetchAuthors();
    });
  }

  deleteBook(row: Book) {
    const dialogRef = this.dialog.open(DeleteBookComponent, { data: row });
    dialogRef.afterClosed().subscribe(result => {
      this.apiService.fetchBooks();
    });
  }
}
