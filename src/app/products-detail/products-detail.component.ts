import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  product: any;

  constructor(private productsService : ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.productsService.getProduct(this.route.snapshot.params['id']).subscribe(data => {
      this.product = data})
    }

    updateProduct(){
      this.router.navigate(['product/update', this.route.snapshot.params['id']])
    }

    closeProduct(){
      this.router.navigate(['products']);
    }
}


