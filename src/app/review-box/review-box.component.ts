import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-box',
  templateUrl: './review-box.component.html',
  styleUrls: ['./review-box.component.css']
})
export class ReviewBoxComponent implements OnInit {

  array = Array;


  @Input() review

  constructor() { }

  ngOnInit(): void {
    console.log(this.review)
  }

}
