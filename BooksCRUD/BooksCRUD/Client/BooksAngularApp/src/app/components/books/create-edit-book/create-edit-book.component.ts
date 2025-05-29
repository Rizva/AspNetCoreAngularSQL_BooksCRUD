import { Component, computed, Inject, OnInit, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/books.service';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';


import { Book } from '../../../models/book';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Author } from '../../../models/author';

@Component({
  selector: 'app-create-edit-book',
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatInputModule, ReactiveFormsModule, MatDatepickerModule, MatSelectModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-edit-book.component.html',
  styleUrl: './create-edit-book.component.css'
})
export class CreateEditBookComponent implements OnInit {

  booksForm: FormGroup;
  authors: Signal<Author[]>;

  constructor(private fb: FormBuilder, private apiService: ApiService, public dialogRef: MatDialogRef<CreateEditBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.authors = this.apiService.authorsSignal;

    this.booksForm = this.fb.group({
      id: [this.data?.passedData?.id ?? '', []],
      title: [this.data?.passedData?.title ?? '', [Validators.required]],
      isbn: [this.data?.passedData?.isbn ?? null, [Validators.required]],
      publicationYear: [this.data?.passedData?.publicationYear ?? null],
      description: [this.data?.passedData?.description ?? ''],
      imageURL: [''],
      authorID: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Fetch authors on component initialization
    this.apiService.fetchAuthors();
  }

  onYearSelected(selectedYear: any, datepicker: MatDatepicker<any>) {
    this.booksForm.get('publicationYear')?.setValue(selectedYear);
    datepicker.close(); // Close the datepicker after year selection
  }

  onSubmit() {
    if (this.booksForm.valid) {
      if (this.data.mode == 'EDIT') {
        this.apiService.editBook(this.data.passedData.id, this.booksForm.value);
      } else {
        const formData: Book = {
          title: this.booksForm.value.title,
          isbn: this.booksForm.value.isbn,
          publicationYear: this.booksForm.value.publicationYear,
          description: this.booksForm.value.description,
          authorID: this.booksForm.value.authorID,
        }
        this.apiService.postBook(formData);
      }
    } else {
      console.log('Form is invalid');
    }
  }

}
