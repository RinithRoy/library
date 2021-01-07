import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http :HttpClient) { }

  getProducts() //to get list of products//
  {
    return this.http.get("http://localhost:3000/products");
  }

  newProduct(item) //to add a product//
  {
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data => {console.log(data)})
  }
  delete(id) //to delete a product//
  {
    return this.http.post("http://localhost:3000/edit",{"id":id})
    .subscribe(status=>{console.log(status)})
  }
  getproducts(id) //to identify a single product//
  {
    return this.http.post("http://localhost:3000/product",{"id":id})
    
  }
  update(item) //to update a product//
  {
    return this.http.post("http://localhost:3000/update",{"product":item})
    .subscribe((status)=>{
      console.log("Successfully Updated");
  });
}
}
