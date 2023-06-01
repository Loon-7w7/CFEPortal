import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/implementation/login-service';

@Component({
  selector: 'cfe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router,
    private loginService: LoginService)
  {}
  NavegateTo(Ruta: string): void
  {
    this.router.navigate([Ruta]);
  }
  logout():void 
  {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
