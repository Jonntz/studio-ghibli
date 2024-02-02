import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Axios from 'axios';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: any;
  movie: any;

  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    this.id = this.route.snapshot.params["id"]
    await this.getMovieById()
  }

  async getMovieById() {
    let url = `https://ghibliapi.vercel.app/films`
    const api = Axios.create({
      baseURL: url
    })
    api.get(`/${this.id}`).then(res => {
      this.movie = res.data;
      console.log(this.movie)
    })
  }
}
