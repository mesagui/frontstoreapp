import { Product } from './../../../models/Product';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  data: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language:{
        url:'//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
      }
    };

    this.productService.ListProduct().subscribe((res:Product) => {
      console.log(res);
      this.data = res;
      this.dtTrigger.next();
    })
  }

  ngOnDestroy():void {
    this.dtTrigger.unsubscribe();
  }

}
