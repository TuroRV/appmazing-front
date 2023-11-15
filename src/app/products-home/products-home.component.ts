import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit {
  products: any = [];

  constructor(private productsService : ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data=>{this.products = data;})
  }

  openDetailForm(row: any){
    this.router.navigate(['product', row.id]);
  }

  updateProductDetail(product: any){
    this.router.navigate(['/product/update',product])
  }

  displayedColumns: string[] = ['id','name','stock','price','active','date_added','category', 'actions'];

}
