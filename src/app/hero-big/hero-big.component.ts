import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-big',
  templateUrl: './hero-big.component.html',
  styleUrls: ['./hero-big.component.css']
})
export class HeroBigComponent implements OnInit {

  @Input() info;

  constructor() { }

  ngOnInit(): void {
  }

}
