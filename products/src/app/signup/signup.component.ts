import { Component, OnInit } from '@angular/core';
import { UserModel } from './signup.model';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
persons:UserModel[];
userData = new UserModel(null,null,null,null);
  constructor(private registerService:RegisterService,private router:Router) {}

  ngOnInit(): void {}
  signup()
  {
    this.registerService.register(this.userData);
    console.log(this.userData)
    alert("Successfully Registered");
    this.router.navigate(['/login']);
  }

}
