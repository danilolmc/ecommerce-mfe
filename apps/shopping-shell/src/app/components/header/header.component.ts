import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { cartItemsSelector } from '@shopping/shared/state';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent{
  store = inject(Store);
  cartItems = this.store.pipe(select(cartItemsSelector));
}


