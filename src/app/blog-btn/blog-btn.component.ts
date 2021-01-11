import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-btn',
  templateUrl: './blog-btn.component.html',
  styleUrls: ['./blog-btn.component.css']
})
export class BlogBtnComponent implements OnInit {

  @Input() info

  constructor() { }

  ngOnInit(): void {
  }

}
