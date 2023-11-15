import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../Model/Category';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.css']
})
export class ProductsUpdateComponent implements OnInit {
  product: any;
  category: Category = new Category(); 
  categories: []

  constructor(private productsService: ProductsService, private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data
      })
    this.productsService.getProduct(this.route.snapshot.params['id']).subscribe(data => {
      this.product = data})
  }

  updateProduct(){
    
    this.productsService.updateProduct(this.product);
    this.navigateDetail;

  }

  cancelUpdate (){
    this.navigateDetail();
  }

  navigateDetail (){
    this.router.navigate(['/product',this.route.snapshot.params['id']])
  }
}
