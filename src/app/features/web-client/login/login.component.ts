import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { RegisterComponent } from "../register/register.component";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit{
  public loginForm: FormGroup ;
  public loginCover = 'src/assets/svgs/undraw_bookshelves_re_lxoy.svg'

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ){
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
  })
  }
  ngOnInit(): void {
  }

  submit(){
    this.loginForm.markAllAsTouched();
    if(this.loginForm?.invalid){
      return;
    }
    this.authService.login(this.loginForm?.value).subscribe(
      {
        next: res => {
        },
        error: error => {
          this.messageService.add(
            { severity: 'error', summary: 'error', detail: error?.message || 'Lỗi hệ thống' }
          )
        }
      }
    )
  }

}
