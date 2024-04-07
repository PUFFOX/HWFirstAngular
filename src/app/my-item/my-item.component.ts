import { Component } from '@angular/core';
import { Product } from '../product';
import { Products } from '../mock-products';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-item',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './my-item.component.html',
  styleUrl: './my-item.component.css'
})

export class MyItemComponent {
  myProducts: Product[] = [ 
    {
      name: "Товар 1",
      price: 100,
      description: "Це перший товар"
    },
    {
      name: "Товар 2",
      price: 200,
      description: "Це другий товар"
    },
    { 
      name: "Товар 3",
      price: 300,
      description: "Це третій товар"
    },
    { 
      name: "Товар 4",
      price: 400,
      description: "Це четвертий товар"
    } 
  ];
  selectedProduct: Product | undefined; // 

  showProductDetails(pr: Product): void {
    this.selectedProduct = pr;
  }
}
