import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Author } from '../../models/author';
import { ApiService } from '../../services/books.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditAuthorComponent } from './create-edit-author/create-edit-author.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DeleteAuthorComponent } from './delete-author/delete-author.component';

export enum Mode {
  Create =  'CREATE',
  Edit =    'EDIT'
}

@Component({
  selector: 'app-authors',
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  displayedColumns: string[] = ['id', 'name', 'birthDate', 'bio', 'actions'];
  mode: Mode = Mode.Create;

  // Access the Signal from the ApiService
  authors: Signal<Author[]>;
  constructor(private apiService: ApiService, private readonly dialog: MatDialog) {
    this.authors = this.apiService.authorsSignal;
  }
  ngOnInit(): void {
    // Fetch authors on component initialization
    this.apiService.fetchAuthors();
  }

  openCreateEditAuthor(mode: string, row?: Author) {
    const dialogData = {
      mode: mode,
      passedData: row
    }
    const dialogRef = this.dialog.open(CreateEditAuthorComponent, { data: dialogData });
    dialogRef.afterClosed().subscribe(result => {
      this.apiService.fetchAuthors();
    });
  }

  deleteAuthor(row: Author) {
    const dialogRef = this.dialog.open(DeleteAuthorComponent, { data: row });
    dialogRef.afterClosed().subscribe(result => {
      this.apiService.fetchAuthors();
    });
  }
}
