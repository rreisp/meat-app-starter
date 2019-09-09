import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { MEAT_API } from './../../app.api';
import { User } from './user.model';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoginService {

        user: User;

        constructor(private http: HttpClient) { }

        isLoggedIn(): boolean {
                return this.user !== undefined;
        }

        login(email: string, password: string): Observable<User> {
                return this.http.post<User>(`${MEAT_API}/login`, { email, password }).pipe(
                        tap(user => this.user = user)
                );
        }
}
