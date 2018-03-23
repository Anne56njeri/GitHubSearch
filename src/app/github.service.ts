import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
private username:string;
private Clientid= 'Iv1.4cda4cef9cb16ec5';
private secret='50b969d356b0e26065b65c535d46a8e767f5c736';

  constructor(private http:Http) {
  console.log("service works")
  this.username= 'Anne56njeri'
   }
   getProfInfo(){
     return this.http.get('https://api.github.com/users/'+this.username +"?client_id" + this.Clientid + "&client_secret=" +this.secret).map(res=> res.json());
   }
   getProfRepo(){
     return this.http.get('https://api.github.com/users/'+this.username +"/repos?client_id" + this.Clientid + "&client_secret=" +this.secret).map(res=> res.json());
   }
  update(username:string){
    this.username= username;

  }
}
