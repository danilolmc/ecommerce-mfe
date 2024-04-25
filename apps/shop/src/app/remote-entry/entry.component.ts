import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  selector: 'app-shop-entry',
  template: `<router-outlet />`,
})
export class RemoteEntryComponent { }
