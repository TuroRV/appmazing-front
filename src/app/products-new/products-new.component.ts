import { Component, OnInit } from '@angular/core';
import { Category } from '../Model/Category';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { CategoryService } from '../category.service';
import { __assign } from 'tslib';

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
  categories: [];
 

  constructor(private router: Router, private productsService: ProductsService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{
    this.categories = data
    })
  }

  newProduct(){
    const product = {
      name: this.name,
      stock: this.stock,
      price: this.price,
      active: this.active,
      date_added: this.date_added,
      category: this.category,
     
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
