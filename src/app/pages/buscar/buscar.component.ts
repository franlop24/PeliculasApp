import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  textoBusqueda: string;
  movies: Movie[];

  constructor(private activatedRoute: ActivatedRoute,
              private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.textoBusqueda = params.texto;
      //Llamar el servicio
      this.peliculasService.buscarPeliculas(params.texto)
          .subscribe( movies => {
            console.log(movies);
            this.movies = movies;
          } )
    } )
  }

}
