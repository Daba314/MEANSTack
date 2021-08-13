import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //Object more restrictive that' why any
  pages:any;
  user!: string;

  get userLoggedIn(){
    if(localStorage.getItem("user")){
      this.user = (localStorage.getItem("user") as string).replace(/\"/g,"");
      return true;
    }
    return false;
  }

  constructor(public pageService: PageService) { }

  ngOnInit() {
    this.pageService.getPages().subscribe(pages => {this.pageService.pagesBS.next(pages)
      //if oagesBs updated when pages would update too
    this.pages = this.pageService.pagesBS;
    });

  }

}
