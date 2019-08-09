import { ErrorHandler } from './../app.error-handler';
import { MEAT_API } from './../app.api';
import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantsService {
        constructor(private http: HttpClient) { }

        restaurants(): Observable<Restaurant[]> {
                return  this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
                        .pipe(
                                catchError( ErrorHandler.handleError )
                        );

                // return  this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
                // .map(response => response.json())
                // .catch(ErrorHandler.handleError)
        }
}
