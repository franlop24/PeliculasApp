import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private pelisService: PeliculasService) { 
    
  }

  ngOnInit(): void {
    this.pelisService.getCartelera()
      .subscribe(peliculas => {
        this.movies = peliculas.results
      })
  }

}
