import { Component, Inject, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {
  productId: number;

  constructor(private productsService: ProductsService, public dialogRef: MatDialogRef<ProductsDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {productId: number}, private router: Router) {this.productId = data.productId}

  ngOnInit() {
  }

  confirmP():void{
    this.productsService.deleteProduct(this.productId);
    this.dialogRef.close();
    this.router.routeReuseStrategy.shouldReuseRoute = function(){return false};
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/products']);
  }

}
