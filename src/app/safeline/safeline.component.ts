import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-safeline',
  templateUrl: './safeline.component.html',
  styleUrls: ['./safeline.component.css']
})
export class SafelineComponent implements OnInit {

  @Input() info;

  constructor() { }

  ngOnInit(): void {
  }

}
