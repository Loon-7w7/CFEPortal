import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/core/forms.models/loginForm';
import { LoginService } from 'src/app/services/implementation/login-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contenedorStyles: any = {};
  isLoading: boolean;
  formLogin: LoginForm;
  constructor(
    private router: Router,
    private loginService: LoginService
    ) 
  {
    this.isLoading = true
    this.formLogin =
    {
      passaword: null,
      user: null
    }
   }

  ngOnInit() {
    var isLogin = this.loginService.isLogin();
  
    setTimeout(() => {
      this.contenedorStyles = {
        width: '40%',
        position: 'relative'
      };
      isLogin.subscribe(response =>
        {
          if(response)
          {
            this.router.navigate(['/home']);
          }
        });
      this.stopLoading()
    }, 1000);
  
  }
  startLoading() {
    this.isLoading = true;
  }
  
  stopLoading() {
    this.isLoading = false;
  }
  onSubmit()
  {
    this.startLoading()
    this.loginService.login(this.formLogin).subscribe(success => {
      if (success) {
        // Login exitoso, redirigir a la página principal o realizar acciones adicionales
        this.stopLoading();
        this.router.navigate(['/home']);
      } else {
        // Login fallido, mostrar mensaje de error o realizar acciones adicionales
      }
    });
    
  }
}
