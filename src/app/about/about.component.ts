import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
fullImagePath: string;
  constructor() {
  this.fullImagePath= '../assets/images/wonder.jpg'}

  ngOnInit() {
  }

}
