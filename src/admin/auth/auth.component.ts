import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./aut.component.css'],
})
export class AuthComponent {
  public username!: string;
  public password!: string;
  public errorMessage!: string;
  constructor(private router: Router, private auth: AuthService) {}
  authenticate(formulario:any) {
    this.auth
      .authenticate(formulario.username, formulario.password)
      .subscribe((response) => {
        if (response) {
          this.router.navigateByUrl('/admin/main');
        } else {
          this.router.navigateByUrl('/admin');
        }
        this.errorMessage = 'Authentication Failed';
      });
  }
}
