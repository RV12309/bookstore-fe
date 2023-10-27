import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  public registerForm: FormGroup ;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router
  ){
    this.registerForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, Validators.required]
  })
  }
  ngOnInit(): void {
  }

  submit(){
    this.authService.register(this.registerForm?.value).subscribe(
      (res => {
        if(res?.code === '00') {
          this.route.navigate(['/register/verify'])
        }
      })
    )
  }
}
