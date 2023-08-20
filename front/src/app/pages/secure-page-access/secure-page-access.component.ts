import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure-page-access',
  templateUrl: './secure-page-access.component.html',
  styleUrls: ['./secure-page-access.component.scss']
})
export class SecurePageAccessComponent {

  constructor(private router: Router){}

}
