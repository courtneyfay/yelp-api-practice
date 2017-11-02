import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-search-yelp',
  templateUrl: './search-yelp.component.html',
  styleUrls: ['./search-yelp.component.css']
})
export class SearchYelpComponent implements OnInit {

  constructor(
		private http: Http
	) { }

  ngOnInit() {
  }

  findRestaurant(restaurantName){
    console.log('finding ' + restaurantName);
    this.http.get('https://swapi.co/api/people/?search=' + restaurantName)
	    .toPromise()
	    .then(response => console.log(response.json()));
	}
}
