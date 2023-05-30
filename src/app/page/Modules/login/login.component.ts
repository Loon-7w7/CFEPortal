import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/core/forms.models/loginForm';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contenedorStyles: any = {};
  isLoading: boolean;
  formLogin: LoginForm;
  constructor(private router: Router) 
  {
    this.isLoading = true
    this.formLogin =
    {
      passaword: null,
      email: null
    }
   }

  ngOnInit() {
    setTimeout(() => {
      this.contenedorStyles = {
        width: '40%',
        position: 'relative'
      };
      this.stopLoading()
    }, 5000);
  
  }
  startLoading() {
    this.isLoading = true;
  }
  
  stopLoading() {
    this.isLoading = false;
  }
  onSubmit()
  {
    this.router.navigate(['/home']);
  }
}
