import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/Rx';
import {of} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  sidenavOpen = new BehaviorSubject(false);
  constructor() { }
}
