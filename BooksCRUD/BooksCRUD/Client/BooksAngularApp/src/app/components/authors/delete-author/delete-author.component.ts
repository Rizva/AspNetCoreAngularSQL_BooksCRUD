import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../../services/books.service';

@Component({
  selector: 'app-delete-author',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './delete-author.component.html',
  styleUrl: './delete-author.component.css'
})
export class DeleteAuthorComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteAuthorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiService
  ) { }

  onConfirm() {
    this.apiService.deleteAuthor(this.data.id);
    this.dialogRef.close();
  }

}
