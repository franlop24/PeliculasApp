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
      //Llamar servicio
      if(this.pelisService.cargando) { return; }

      this.pelisService.getCartelera().subscribe( peliculas => {
        this.movies.push(...peliculas);
      })
    }
  }

  constructor(private pelisService: PeliculasService) { 
    
  }

  ngOnInit(): void {
    this.pelisService.getCartelera()
      .subscribe(peliculas => {
        this.movies = peliculas;
        this.moviesSlideshow = peliculas;
      })
  }

}
