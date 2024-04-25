import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SessionProductComponent } from '../../components/session/category.componet';
import { ShopHeroComponent } from '../../components/shop-hero/shop-hero.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductsComponent,
        CommonModule,
        SessionProductComponent,
        ShopHeroComponent,
        MatProgressSpinnerModule
      ],
      providers: [
        provideRouter([]),
        provideStore({})
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
