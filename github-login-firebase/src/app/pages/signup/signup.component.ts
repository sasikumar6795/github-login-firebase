import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onSubmit(formV: NgForm) {

    const {email, password} = formV.form.value;

    this.authService.signUp(email,password)
    .then(
      (res)=>{
        this.router.navigateByUrl('/');
        this.toastr.success("signup success");
      }
    )
    .catch(
      (err)=>{
        console.log(err.message);
        this.toastr.error('Signup failed');
      }
    )

    

  }

  ngOnInit(): void {}
}
