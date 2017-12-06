import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service'

import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
  
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>
  restaurant: string

  constructor(private restaurantService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.restaurant = this.route.parent.snapshot.params['id'];
    this.reviews = this.restaurantService.reviewsOfRestaurant(this.restaurant)
    
  }

}
