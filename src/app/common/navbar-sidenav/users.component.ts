import {Component, OnInit, ViewChild} from '@angular/core';

import {LocalUserService} from '../../ares-users/services/index';
import {Funcs} from '@utils';
import {UiService} from '../../utility/services/ui.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-users-component',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class NavbarSidenavTree implements OnInit {
  @ViewChild('drawer') drawer;

  constructor(private localUserService: LocalUserService, private functions: Funcs, private ui: UiService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.ui.sidenavOpen.subscribe(() => this.drawer.toggle())
  }

  TREE_DATA = this.route.snapshot.data['menu'];
  card_titile = this.route.snapshot.data['title'];
}
