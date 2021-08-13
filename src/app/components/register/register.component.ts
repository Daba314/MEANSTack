import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:any
  password:any
  userExists:Boolean = false

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    //if already logged in user go to register page  it will redirect him to the home page
    //if(localStorage.getItem("user")) this.router.navigateByUrl('');
  }

  register(f:any){
    this.userService.register(f.value).subscribe(res =>{
      //res from nodecms file user.js
      if(res === 'userExists'){
          this.userExists = true;
          setTimeout(()=>{this.userExists = false},2000)
      }
      else{

        //if new user it would redirect to login page
        this.router.navigateByUrl('login')
      }
    })
  }

}
