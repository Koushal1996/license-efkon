import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../../services/product/product.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
  Family= []
  constructor(private _productService :ProductService) { }

  ngOnInit() {
    this._productService.getProductFamilies().subscribe(
      data=>{
        this.Family= data
        console.log(data)
      }
    )
  }

}
