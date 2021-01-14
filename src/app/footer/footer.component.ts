import { Component, OnInit } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faEnvelope, faMapMarked, faMapMarker, faMapMarkerAlt, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  maps = faMapMarkerAlt;
  mail = faEnvelope;
  phone = faMobile;

  constructor() { }

  ngOnInit(): void {
  }

}
