import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Observable } from 'rxjs';

import { MEAT_API } from './../app.api';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderService {
        constructor(private cartService: ShoppingCartService, private http: HttpClient) { }

        itemsValue(): number {
                return this.cartService.total();
        }


        cartItems(): CartItem[] {
                return this.cartService.items;
        }

        increaseQty(item: CartItem) {
                this.cartService.increaseQty(item);
        }

        decreaseQty(item: CartItem) {
                this.cartService.decreaseQty(item);
        }

        remove(item: CartItem) {
                this.cartService.removeItem(item);
        }

        checkOrder(order: Order): Observable<string> {
                // console.log(JSON.stringify(order));
                // const head = new HttpHeaders();
                // head.append('Content-Type', 'application/json');
                // const options = {
                //         headers: head
                // };
                return this.http.post<Order>(`${MEAT_API}/orders`,
                        order).pipe(
                                map(response => response.id)
                        );
        }

        clear() {
                this.cartService.clear();
        }
}
