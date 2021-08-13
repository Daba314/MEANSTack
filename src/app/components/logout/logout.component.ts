import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("user")){
      localStorage.removeItem("user")
      this.router.navigateByUrl('');
    }
    //if not authorized user somehow go to logout it will redirect him to login page
    else{
      this.router.navigateByUrl('login')
    }
  }

}
