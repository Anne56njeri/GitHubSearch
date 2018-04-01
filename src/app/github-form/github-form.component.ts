import { Component, OnInit } from '@angular/core';
import {GithubService} from'../github.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
  profo:any[];

  username:string;

  constructor(private githubservice: GithubService , private router: Router) {
    this.githubservice.getProfInfo().subscribe(profo => {

      this.profo=profo;
    })
    //this.githubservice.getProfRepo().subscribe(repo => {

      //this.repo=repo;
    //})

   }

  getProfile(){
    this.githubservice.update(this.username)
    this.githubservice.getProfInfo().subscribe(profo => {

      this.profo=profo;
    })
    //this.githubservice.getProfRepo().subscribe(repo => {

      //this.repo=repo;
    //})
  }

  ngOnInit() {

  }

}
