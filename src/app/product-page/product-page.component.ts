import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  prodotto
  reviews
  consigliati=[]
  safeline
  fotoPrincipale
  bloccoVisibile="description"
  quantity
  totale

  constructor(
    private route: ActivatedRoute,
    private util: UtilityService
    ) { }

  ngOnInit(): void {
    this.quantity=0;
    this.totale=0;
    this.route.params.subscribe(url => {
      let tmp:any = this.util.mandaInfo("product");
      tmp.then(dati=>{
        for(let elem of dati){
          if(elem.id == url.product){this.prodotto=elem}
        }
        let i = 0;
        this.consigliati =[]
        while(i < 4){
          try {
            let index = (Math.random() * (dati.length-1) ).toFixed(0)
            this.consigliati.push(dati[index])
            i++;
          } catch (error) {
            continue
          }
        }
        this.fotoPrincipale = this.prodotto.photos[0];
        console.log(this.prodotto)
      })
      let tmp4:any = this.util.mandaInfo("reviews");
        tmp4.then(rev=>{
        this.reviews = rev;
    })
    });
    let tmp3:any = this.util.mandaInfo("safeline");
        tmp3.then(safe=>{
        this.safeline = safe;
    })



    }

    changeQuantity(op){
      if(op == "+"){
        this.quantity++
        this.calcolaTot()
      }
      if(op =="-"){
        if(this.quantity>0){
          this.quantity--
          this.calcolaTot()
        }
        else{
          this.quantity=0
          this.calcolaTot()
        }
      }
    }

    calcolaTot(){
      if(this.prodotto.sale == 0){
        this.totale=(this.prodotto.price * this.quantity).toFixed(2)
      }else{
        this.totale=(this.prodotto.price * (1-this.prodotto.sale) * this.quantity).toFixed(2)
      }
    }

    cambiaBloccoVisibile(impostami){
      let elemSelezionato = document.getElementById(this.bloccoVisibile);
      elemSelezionato.classList.remove("selected");
      this.bloccoVisibile = impostami;
      elemSelezionato = document.getElementById(this.bloccoVisibile);
      elemSelezionato.classList.add("selected");
  }

}
