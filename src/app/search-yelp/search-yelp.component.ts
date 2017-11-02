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

  findRestaurants(cityName){
    console.log('finding ' + cityName);
    this.http.get('https://api.yelp.com/v2/search?term=food&location=' + cityName)
	    .toPromise()
	    .then(response => console.log(response.json()));
	}
	/*
	https://www.yelp.com/developers/documentation/v3 (v2 is being deprecated next summer 2018 and is no longer accepting new signups)
	https://www.yelp.com/developers/documentation/v3/authentication
	currently working on oauth authentication
	Definitely do!
		Make Yelp’s logo prominently visible on all content that originated from Yelp. The casual user should always know where Yelp content comes from!
		Make the Yelp logo link to yelp.com or the business’s Yelp page wherever and whenever you use it.
		Link directly to the corresponding Yelp pages whenever you display star ratings, review excerpts, and review counts from Yelp. Please don’t link content from Yelp to another page, interstitial, or any other location other than directly back to Yelp!
		Display aggregate star ratings side-by-side with the number of reviews on which they’re based.
		Include “read more” links to full reviews whenever you use review excerpts. Otherwise, include a “Read Reviews” link to the corresponding business pages on Yelp.
	*/
}
