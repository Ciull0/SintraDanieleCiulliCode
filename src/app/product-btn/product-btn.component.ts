import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-btn',
  templateUrl: './product-btn.component.html',
  styleUrls: ['./product-btn.component.css']
})
export class ProductBtnComponent implements OnInit {

  constructor() { }

  @Input() info;

  ngOnInit(): void {
  }

}
