import { Component, OnInit } from '@angular/core';
import {ProductService} from '..//product.service'
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
//   productDetails=[{id:'1',name:'mango',price:'234'},
//   {id:'2',name:'banana',price:'124'}
// ,{id:'3',name:'apple',price:'500'}] 
productDetails
productname
 
  constructor(private product:ProductService) { }

  ngOnInit() {
    
  }
  getProduct()
  {
    //this.productDetails=this.product.getProductDetails()
    this.productname=this.product.getProductName()
    alert( this.productname)

  }

}
