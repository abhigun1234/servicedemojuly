import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productDetails=[{id:'1',name:'mango',price:'234'},
  {id:'2',name:'banana',price:'124'}
,{id:'3',name:'apple',price:'500'}]
productName;
  constructor() { }

  public getProductDetails()
  {

    return this.productDetails
  }
  public setProdctData(data)
  {
    this.productName=data
  }
  public getProductName()
  {

    return this.productName
  }
}
