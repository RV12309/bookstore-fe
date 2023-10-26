import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private authService: AuthService
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
    console.log(this.registerForm?.value);
    this.authService.register(this.registerForm?.value).subscribe(
      (res => {
        console.log(res)
      })
    )
  }
}
