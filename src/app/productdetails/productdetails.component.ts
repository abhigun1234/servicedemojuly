import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productDetails
  constructor(private product:ProductService) { }

  ngOnInit() {
  }
  getProduct()
  {
   this.productDetails= this.product.getProductDetails()

  }
}
