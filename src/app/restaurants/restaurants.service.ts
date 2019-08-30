import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { ErrorHandler } from './../app.error-handler';
import { MEAT_API } from './../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Restaurant } from './restaurant/restaurant.model';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantsService {
        constructor(private http: HttpClient) { }

        restaurants(search: string = ''): Observable<Restaurant[]> {
                // return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: {}})
                // .pipe(
                //         catchError(ErrorHandler.handleError)
                // );
                return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params: {q: search} })
                        .pipe(
                                catchError(ErrorHandler.handleError)
                        );
                // return  this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
                // .map(response => response.json())
                // .catch(ErrorHandler.handleError)
        }

        restaurantById(id: string): Observable<Restaurant> {
                return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
                        .pipe(
                                catchError(ErrorHandler.handleError)
                        );
                // return  this.http.get(`${MEAT_API}/restaurants/${id}`)
                // .map(response => response.json())
                // .catch(ErrorHandler.handleError)
        }

        reviewsOfRestaurant(id: string): Observable<any> {
                return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);
        }

        menuOfRestaurant(id: string): Observable<MenuItem[]> {
                return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
                        .pipe(
                                catchError(ErrorHandler.handleError)
                        );
                // return  this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
                // .map(response => response.json())
                // .catch(ErrorHandler.handleError)
        }
}
