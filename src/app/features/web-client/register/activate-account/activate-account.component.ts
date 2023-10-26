import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit{
  public loginForm: FormGroup ;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router
  ){
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      erificationCode: [null, Validators.required],
  })
  }
  ngOnInit(): void {
  }

  submit(){
    console.log(this.loginForm?.value);
    this.authService.verify(this.loginForm?.value).subscribe(
      (res => {
        if(res?.code === '00') {
          this.route.navigate(['/register/verify'])
        }
      })
    )
  }
}
