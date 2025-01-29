import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

interface CartItem {
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cartValue = signal(0);


  private cartItems = signal<CartItem[]>([]);

  constructor() {}


  addToCart(item: CartItem): void {
    this.cartItems.update(items => [...items, item]);
    this.cartValue.update(value => value + item.price);
  }


  removeFromCart(item: CartItem): void {
    this.cartItems.update(items => items.filter(i => i !== item));
    this.cartValue.update(value => value - item.price);
  }


  getCartItems() {
    return this.cartItems;
  }


  getCartValue() {
    return this.cartValue;
  }
}
