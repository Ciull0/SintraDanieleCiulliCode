import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-small',
  templateUrl: './hero-small.component.html',
  styleUrls: ['./hero-small.component.css']
})
export class HeroSmallComponent implements OnInit {

  constructor() { }

  @Input() info;

  ngOnInit(): void {
  }

}
