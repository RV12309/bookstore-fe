import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/core/interfaces/auth.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { RegisterComponent } from "../register/register.component";
import { MessageService } from "primeng/api";
import { jwtDecode } from 'jwt-decode';
import { StoreService } from "src/app/core/services";
import { StorageKey, TokenStorageKey } from "src/app/core/enums";

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
    private route: Router,
    private messageService: MessageService,
    private storeService: StoreService
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
        next: (res: ILogin) => {
          this.storeService.setSession(TokenStorageKey.accessToken, res?.data.token);
          this.route.navigate(['/']);
        },
        error: error => {
          this.messageService.add(
            { severity: 'error', summary: 'error', detail: error?.message || 'Lỗi hệ thống' }
          )
        }
      }
    )
  }

  get usernameControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

}
