import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports:[RouterModule,CommonModule]
})
export class CartComponent {
  cartItems = this.cartService.getCartItems();
  cartValue = this.cartService.getCartValue();

  constructor(private cartService: CartService) {}

  addItemToCart() {
    const newItem = { name: 'Item ' + (this.cartItems().length + 1), price: 10 };
    this.cartService.addToCart(newItem);
  }

  removeItemFromCart(item: any) {
    this.cartService.removeFromCart(item);
  }
}
