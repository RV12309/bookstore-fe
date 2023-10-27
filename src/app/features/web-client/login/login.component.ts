import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/core/interfaces/auth.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public loginForm: FormGroup ;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router,
  ){
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
  })
  }
  ngOnInit(): void {
  }

  submit(){
    console.log(this.loginForm?.value);
    this.authService.login(this.loginForm?.value).subscribe({
      next: (data: ILogin) => {
        sessionStorage.setItem('token', data.data?.token);
        this.route.navigate(['/']);
      },
      error: (err) => {
        if (err) {
          // this.modalService.alert({
          //   type: 'error',
          //   message: err?.message || 'loi_he_thong',
          // });
        }
      },
    })
  }

}
