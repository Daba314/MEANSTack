import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  //param after localhost.../
  param:any;
  pageBody:any;
  pages:any;

  constructor(private route:ActivatedRoute, private router:Router, private pageService:PageService, private title:Title) {

   }

  ngOnInit(): void {
    this.pageService.getPages().subscribe(pages =>{
      this.pages = pages;
    })
    this.route.params.subscribe(params =>{
      //from the router path
      this.param = params['page'];
      if(this.param == undefined) {
        this.param = 'home'
        this.title.setTitle('CMS')
      }
      else{
            this.title.setTitle(this.param)
      }
      this.pageService.getPage(this.param).subscribe(pageBody=>{
        if(pageBody == null) {this.router.navigateByUrl('')}
        this.pageBody = pageBody
      })
    })
  }

}
