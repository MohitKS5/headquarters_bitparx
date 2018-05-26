import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-go-back-component',
  templateUrl: './go-back.component.html',
  styleUrls: [ './go-back.component.css' ]
})
export class GoBackComponent {

  constructor(public location: Location, private router: Router) {}

    goBack() {
      this.location.back();
    }
}
