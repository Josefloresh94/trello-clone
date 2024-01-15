import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table'; 

import { Product } from '../../models/product.model';

@Component({
    selector: 'app-table',
    standalone: true,
    templateUrl: './table.component.html',
    imports: [NavbarComponent, HttpClientModule, CdkTableModule]
})
export class TableComponent implements OnInit {
  products: Product[] = [];
  columns: string[] = ['#No', 'Name', 'price', 'cover'];

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
