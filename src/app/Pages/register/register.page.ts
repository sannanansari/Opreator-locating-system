import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from 'src/app/Service/common-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  passwordShow = true;
  passwordConfirmShow = true;
  passwordConfirmType = 'password';
  passwordType = 'password';
  passwordEqual = false;

  constructor(private commonService: CommonService) {}

  ngOnInit() {}

  changeType() {
    if (this.passwordShow) {
      this.passwordType = 'text';
      this.passwordShow = false;
    } else {
      this.passwordType = 'password';
      this.passwordShow = true;
    }
  }

  changeConfirmType() {
    if (this.passwordShow) {
      this.passwordConfirmType = 'text';
      this.passwordConfirmShow = false;
    } else {
      this.passwordConfirmType = 'password';
      this.passwordShow = true;
    }
  }

  onSubmit(form: NgForm) {
    console.log("Register Form ==> ",form);
    this.commonService.registerUser(form.value).subscribe((data: any) => {
      console.log("Data ==> ",data);
      
    })
  }

}
