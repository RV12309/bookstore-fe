import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { RegisterComponent } from './register.component';


const routes:Routes = [
  {
    path: '',
    component: RegisterComponent
  },
  {
    path: 'verify',
    component: ActivateAccountComponent
  }
]

@NgModule({
  declarations: [RegisterComponent, ActivateAccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule
  ]
})
export class RegisterModule { }
