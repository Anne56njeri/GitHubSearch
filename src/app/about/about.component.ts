import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

secondImage: string;
hereImage:string;

  constructor() {

  this.secondImage='/assets/images/emoji3.jpg'
  this.hereImage='/assets/images/wonder3.jpg'

}
  ngOnInit() {
  }

}
