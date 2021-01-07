import { Component, OnInit } from '@angular/core';
import { UserModel } from '../signup/signup.model'
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

errorMsg = '';
persons:UserModel[];
userData = new UserModel(null,null,null,null);
// userData ={};

  constructor(private registerService:RegisterService,private router:Router) {}

  ngOnInit(): void {}

  login()
  {
    this.registerService.register1(this.userData)
    // console.log("called");
    // alert("Login Successful"); 
    // this.router.navigate(['/']);
    .subscribe(data => console.log('Login Successful',data, this.router.navigate(['/add'])),
    error => this.errorMsg = error.statusText)
  }

}
