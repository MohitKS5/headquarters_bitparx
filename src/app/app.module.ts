import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {CKEditorModule} from 'ng2-ckeditor';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';

// Services
import {JsontocsvService} from './utility/services/jsontocsv.service'

// features
import * as fromAresUsers from './ares-users';
import * as fromUtils from './utility';
import * as common from './common';
import * as binance from './binance-websockets';

// Components
import {AppComponent} from './components';
import {ConfirmDialogComponent} from '@utils';

// Modules
import {AppRoutingModule} from './app-routing.module';
import {AresMaterialModule} from './modules/material.module';
import {MarkdownModule} from 'ngx-markdown';
import { MaterialTreeComponent } from './utility/material-tree/material-tree.component';
import { UserLevelsComponent } from './ares-users/components/user-levels/user-levels.component';
import { ActiveSessionsComponent } from './ares-users/components/active-sessions/active-sessions.component';
import {BinanceRoutingModule} from './binance-websockets/route';

@NgModule({
  entryComponents: [
    ConfirmDialogComponent,
  ],
  declarations: [
    AppComponent,
    fromAresUsers.components,
    fromUtils.declarations,
    MaterialTreeComponent,
    UserLevelsComponent,
    ActiveSessionsComponent,
    common.components,
    binance.componetns,
  ],
  imports: [
    // core modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,

    // shared modules
    CKEditorModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    AppRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AresMaterialModule,
    BinanceRoutingModule
  ],
  providers: [
    fromAresUsers.services,
    fromAresUsers.guards,
    fromUtils.services,
    binance.services,
    JsontocsvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
