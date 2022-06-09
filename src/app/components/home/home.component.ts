import { Component, OnInit } from '@angular/core';
import Axios from 'axios';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMovies: any;
  animeSearch:any;
  movieOnly:any;

  constructor(private router: Router) { }

  async ngOnInit() {
    await this.getAllMovies()
  }

  async getAllMovies(){
    let url = `https://ghibliapi.herokuapp.com/films`
    const api = Axios.create({
      baseURL: url
    })
    api.get('/').then(res => {
      console.log(res.data)
      this.allMovies = res.data;
    })
  }

  async getMovieByName(params: any){
    let url = `https://ghibliapi.herokuapp.com/films`
    const api = Axios.create({
      baseURL: url
    })
    api.get(`/?title=${params}`).then(res => {
      console.log(res.data)
      this.movieOnly = res.data;
    })
  }

  redirect(id: any){
    this.router.navigate([`movie-details/${id}`]);
  }

  async changeFilter(params: any){

    await this.getMovieByName(params)
  }
}
