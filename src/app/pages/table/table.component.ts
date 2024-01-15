import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSourceProduct } from './data-source';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { Product } from '../../models/product.model';
import { BtnComponent } from "../../components/btn/btn.component";
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Component({
    selector: 'app-table',
    standalone: true,
    templateUrl: './table.component.html',
    imports: [NavbarComponent, HttpClientModule, CdkTableModule, NgClass, BtnComponent, ReactiveFormsModule]
})
export class TableComponent implements OnInit {
  dataSource = new DataSourceProduct();
  columns: string[] = ['#No', 'Name', 'price', 'cover', 'actions'];
  total = 0;
  input = new FormControl('', { nonNullable: true });

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.dataSource.init(data);
      this.total = this.dataSource.getTotal();
    })

    this.input.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.dataSource.find(value);
    });
  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }
}
