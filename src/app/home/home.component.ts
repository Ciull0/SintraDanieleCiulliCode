import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private util: UtilityService
  ) { }

  home = [];
  prodottiVisibili = [];
  prodottiNascosti = [];
  safeline = [];
  nascosti = false;

  ngOnInit(): void {
    let tmp:any = this.util.mandaInfo("home");
        tmp.then(dati=>{
        this.home = dati;
    })
    let tmp2:any = this.util.mandaInfo("product");
        tmp2.then(inf=>{

        this.prodottiVisibili = inf.slice(0,6);
        this.prodottiNascosti = inf.slice(6);
    })
    let tmp3:any = this.util.mandaInfo("safeline");
        tmp3.then(safe=>{
        this.safeline = safe;
    })
  }

}
