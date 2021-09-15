import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { AuthService } from "../shared/services/auth.service"

@Component({
  templateUrl: "./admin.component.html",
  styleUrls: [],
  selector: "",
})
export class AdminComponent {
  constructor(private auth: AuthService, private router: Router) {}
  logout() {
    this.auth.clear()
    this.router.navigateByUrl("/")
  }
}
