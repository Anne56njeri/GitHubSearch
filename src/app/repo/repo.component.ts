import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {GithubService} from '../github.service'
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  providers:[GithubService]
})
export class RepoComponent implements OnInit {
repo:any[];
username:string;
profo:any[];


  constructor(private githubservice: GithubService ,private route:Router ){

  }


getProfile(){

  this.githubservice.update(this.username)
  this.githubservice.getProfInfo().subscribe(profo => {

    this.profo=profo
  })

  this.githubservice.getProfRepo().subscribe(repo => {

    this.repo=repo
  })

}
  ngOnInit() {}








}
