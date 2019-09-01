import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productDetails=[{id:'1',name:'mango',price:'234'},
  {id:'2',name:'banana',price:'124'}
,{id:'3',name:'apple',price:'500'}]
  constructor() { }

  public getProductDetails()
  {

    return this.productDetails
  }
}
