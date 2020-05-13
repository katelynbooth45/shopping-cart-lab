import { Component, OnInit } from '@angular/core';
import { CartItemsService } from '../cart-items.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items;
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = [
    {
      id: "2819",
      product: "shirt",
      quantity: 5,
      price: "$23"
    },
    {
       id: "8942",
      product: "pant",
      quantity: 8,
      price: "$23"
    },
    {
      id: "0494",
      product: "dress",
      quantity: 23,
      price: "$23"
    },
    {
      id: "8390",
      product: "top",
      quantity: 89,
      price: "$23"
    },
  ];

  constructor(private cartItemService: CartItemsService) { }

  ngOnInit(): void { }

  getItems():any {
    this.cartItemService.getItems().subscribe((res) => {
      this.items = res;
    });
  }
}
