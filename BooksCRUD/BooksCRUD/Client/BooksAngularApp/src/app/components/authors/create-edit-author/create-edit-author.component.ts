import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ApiService } from '../../../services/books.service';
import { Author } from '../../../models/author';

@Component({
  selector: 'app-create-edit-author',
  imports: [CommonModule,MatDialogModule, MatButtonModule, MatInputModule, ReactiveFormsModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-edit-author.component.html',
  styleUrl: './create-edit-author.component.css'
})
export class CreateEditAuthorComponent {

  authorsForm: FormGroup;

  constructor(private fb: FormBuilder,private apiService: ApiService,public dialogRef: MatDialogRef<CreateEditAuthorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.authorsForm = this.fb.group({
      id: [this.data?.passedData?.id ?? '', []],
      name: [this.data?.passedData?.name ?? '', [Validators.required]],
      birthDate: [this.data?.passedData?.birthDate ?? null, [Validators.required]],
      deathDate: [null],
      bio: [this.data?.passedData?.bio ?? ''],
      imageURL: [''],
    });
  }
  
  onSubmit() {
    if (this.authorsForm.valid) {
      if (this.data.mode == 'EDIT') {
        this.apiService.editAuthor(this.data.passedData.id, this.authorsForm.value);
      } else {
        const formData: Author = {
          name: this.authorsForm.value.name,
          birthDate: this.authorsForm.value.birthDate,
          bio: this.authorsForm.value.bio,
        }
        this.apiService.postAuthor(formData);
      }
    } else {
      console.log('Form is invalid');
    }
  }

}
