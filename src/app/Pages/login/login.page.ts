import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Service/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  passwordShow = true;
  passwordType = 'password';
  isLogin = false;
  CountryJson = [{ name: 'India', dial_code: '+91', code: 'IN' }];
  CountryCode!: any;
  OTPmessage: string =
    'An OTP is sent to your number. You should receive it in 15 s';
  phoneNo!: any;
  constructor(
    private commonSerive:CommonService,
    private router: Router
  ) {}

   ngOnInit() {
    
  }

  countryCodeChange(event: Event) {
    // this.CountryCode = event.detail.value;
  }

  onSubmit(form: NgForm) {
    this.commonSerive.loginUsers(form.value).subscribe((data: any) => {
      console.log("Login Data ==> ",data);
      this.router.navigateByUrl("/Pages/home");
    })
  }
  
  changeType() {
    if (this.passwordShow) {
      this.passwordType = 'text';
      this.passwordShow = false;
    } else {
      this.passwordType = 'password';
      this.passwordShow = true;
    }
  }

  login() {
    localStorage.setItem('id', 'user');
  }

  loginAdmin() {
  }

}
