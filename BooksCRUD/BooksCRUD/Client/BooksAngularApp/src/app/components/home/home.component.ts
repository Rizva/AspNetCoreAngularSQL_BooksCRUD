import { Component, Signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ApiService } from '../../services/books.service';
import { Genre } from '../../models/genre';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatTableModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  displayedColumns: string[] = ['id', 'name', 'description'];
  
  genres: Signal<Genre[]>;

  constructor(private apiService: ApiService) {
    this.genres = this.apiService.genresSignal;
  }

  ngOnInit(): void {
    this.apiService.fetchGenres();
  }

}
