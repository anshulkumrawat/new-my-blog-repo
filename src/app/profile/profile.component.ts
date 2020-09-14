import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _router: Router, public auth: AuthService) { }

  logout(): void {
    this.auth.logout();
    this. _router.navigate(['/auth/login'], {queryParams: {loggedOut: 'success'}});
  }

  ngOnInit()  {

  }

}
