import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ml-header-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.scss']
})
export class AcountComponent implements OnInit {

  constructor(
    // private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  signOut() {
    // this.authService.signOut();
  }
}
