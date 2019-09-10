import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from './user.model';
import { MEAT_API } from './../../app.api';

@Injectable()
export class LoginService {

        user: User;

        constructor(private http: HttpClient, private router: Router) { }

        isLoggedIn(): boolean {
                return this.user !== undefined;
        }

        login(email: string, password: string): Observable<User> {
                return this.http.post<User>(`${MEAT_API}/login`, { email, password }).pipe(
                        tap(user => this.user = user)
                );
        }

        handleLogin(path: string) {
                this.router.navigate(['/login', path]);
        }
}
