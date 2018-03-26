import { Component, OnInit } from '@angular/core';
import {GithubService} from'../github.service'
@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
  profo:any[];
  repo:any[];
  username:string;

  constructor(private githubservice: GithubService) { }
  getProfile(){
    this.githubservice.update(this.username)
    this.githubservice.getProfInfo().subscribe(profo => {

      this.profo=profo;
    })
    this.githubservice.getProfRepo().subscribe(repo => {

      this.repo=repo;
    })
  }

  ngOnInit() {

  }

}
