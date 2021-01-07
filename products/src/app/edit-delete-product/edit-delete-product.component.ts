import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';


@Component({
  selector: 'app-edit-delete-product',
  templateUrl: './edit-delete-product.component.html',
  styleUrls: ['./edit-delete-product.component.css']
})
export class EditDeleteProductComponent implements OnInit {

  title:string = "Edit & Delete Product";
  products=<any>[];
  imageWidth:number=50;
  imageMargin:number=2;
  productItem = new ProductModel(null,null,null,null,null,null,null,null);
  showImage:boolean = true;
  constructor(private productService: ProductService,private router: Router) {}

  toggleImage():void
  {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void 
  {
    this.productService.getProducts().subscribe((data)=>{
    this.products=JSON.parse(JSON.stringify(data));
    })
  }

delete(id)
{
  this.productService.delete(id);
  alert("Successfully Deleted");
  this.router.navigate(['/']);
}

}
