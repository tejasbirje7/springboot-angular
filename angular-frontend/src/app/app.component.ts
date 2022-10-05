import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular - Spring Boot - Spring Security with JWT';
  isLoggedIn = false;
  username?: string;

  constructor(
    private tokenStorageService: TokenStorageService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      console.log(user);
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
    this.router.navigate(['login']).then(r =>
      window.location.reload()
    );
  }
}
