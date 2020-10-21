import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(){

    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1000;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if(pos > max){
      this.pelisService.getCartelera().subscribe( resp => {
        this.movies.push(...resp.results);
      })
    }
  }

  constructor(private pelisService: PeliculasService) { 
    
  }

  ngOnInit(): void {
    this.pelisService.getCartelera()
      .subscribe(peliculas => {
        this.movies = peliculas.results;
        this.moviesSlideshow = peliculas.results;
      })
  }

}
