import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private authService: AuthService
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
    this.authService.login(this.loginForm?.value).subscribe(
      (res => {
        console.log(res)
      })
    )
  }

}
