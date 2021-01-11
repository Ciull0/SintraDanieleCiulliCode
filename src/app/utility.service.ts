import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private http: HttpClient
  ) { }

  mandaInfo(pagina:string){
    let address = "assets/"+pagina+".json";
    console.log(address);
    return new Promise( (resolve, reject) =>{
      this.http.get(address).subscribe(
        (success:any)=>{
          resolve(success);
        }, (error:any)=>{
          reject(error);
        }
      )
    })
  }

}
