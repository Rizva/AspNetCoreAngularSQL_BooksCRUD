import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../../services/books.service';
@Component({
  selector: 'app-delete-book',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.css'
})
export class DeleteBookComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiService
  ) { }


  onConfirm() {
    this.apiService.deleteBook(this.data.id);
    this.dialogRef.close();
  }

}
