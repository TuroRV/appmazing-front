import { Component, OnInit } from '@angular/core';
import { Category } from '../Model/Category';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {
  name: string;
  stock: number;
  price: number;
  active: boolean;
  date_added: Date;
  category: Category = new Category();

  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit() {
  }

  newProduct(){
    const product = {
      name: this.name,
      stock: this.stock,
      price: this.price,
      active: this.active,
      date_added: this.date_added,
      category: this.category
    }
    this.productsService.newProduct(product);
    this.navigateToHome();
  }

  cancelInsert (){
    this.navigateToHome();
  }

  navigateToHome(){
    this.router.navigate(['/products']);
  }
}
