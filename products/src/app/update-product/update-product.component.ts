import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit,OnDestroy
{
  title:String = 'Update Product';
  id;
  sub;
  constructor(private productService: ProductService,private router: Router,private _Activatedroute:ActivatedRoute) {}
  productItem = new ProductModel(null,null,null,null,null,null,null,null);
  ngOnInit(): void 
  {
      this.sub = this._Activatedroute.paramMap.subscribe((params)=>{
      this.id = params.get('id');
      console.log("id"+this.id);
      this.productService.getproducts(this.id).subscribe((data)=>{
      this.productItem = JSON.parse(JSON.stringify(data));//parsing the products//
      console.log(this.productItem);
    });
  });
  }
  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }
  update()
  {
    console.log(this.productItem);
    this.productService.update(this.productItem);
    alert("Successfully Updated");
    this.router.navigate(['/']);
  }
}


