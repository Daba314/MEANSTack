import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFailure:Boolean = false
  userRegistered:Boolean = false
  username:any
  password:any

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
    //if already logged in user go to login page it will redirect him to the home page
    //if(localStorage.getItem("user")){ this.router.navigateByUrl('');}

  }
  login(f:any){
    this.userService.login(f.value).subscribe(res =>{
      //res from nodecms file user.js
      if(res === "loginIssue"){
          this.loginFailure = true;
          setTimeout(()=>{this.loginFailure = false},2000)
      }
      else{
        //make user login
        localStorage.setItem("user",JSON.stringify(res));
        //if new user it would redirect to login page
        this.router.navigateByUrl('')
      }
    })
  }

}
