import { Component, OnInit } from '@angular/core';
import {ProductModel} from './product.model';
import{ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title : String = "Product-List";
  products:ProductModel[]; //product is the model class for product item//
  imageWidth:number=50;
  imageMargin:number=2;

  showImage:boolean = true;

 //creating service object for calling getProducts()
  constructor(private productService:ProductService) { }

  toggleImage():void
  {
    this.showImage = !this.showImage;
  }
  
  ngOnInit(): void 
  
{ //calling getProducts() and loading the products to product array//

    this.productService.getProducts().subscribe((data)=>{
    this.products=JSON.parse(JSON.stringify(data)); //to get out of json format//
})

  }

}
