import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username='';
  password='';
  errorMsg='';
  constructor(private router:Router) {
  }
  ngOnInit():void {
  }

  login(){

        this.router.navigate(['home'])


  }

}
