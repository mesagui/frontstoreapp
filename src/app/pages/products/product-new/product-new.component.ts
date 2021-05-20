import { ProductService } from 'src/app/services/products/product.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone
  ) { 
    this.productForm = this.formBuilder.group({
      title: [''],
      stock: [''],
      unite_price: [''],
      discontinued: ['']
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.productService.AddProduct(this.productForm.value).subscribe(
      () => {
        console.log('La data ta aqui');
        this.ngZone.run(()=>this.router.navigateByUrl('/product-list'));
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
