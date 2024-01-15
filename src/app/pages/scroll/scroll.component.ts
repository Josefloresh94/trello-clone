import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
}

@Component({
    selector: 'app-scroll',
    standalone: true,
    templateUrl: './scroll.component.html',
    imports: [NavbarComponent, HttpClientModule]
})
export class ScrollComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.products = data;
    })
  }
}
