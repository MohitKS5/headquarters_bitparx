import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';

import {HttpClientModule} from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';

import {CKEditorModule} from 'ng2-ckeditor';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';

// Services
import {JsontocsvService} from './utility/services/jsontocsv.service'

// features
import * as fromAresUsers from './ares-users';
import * as fromUtils from './utility';

// Components
import {AppComponent} from './components';
import {ConfirmDialogComponent} from '@utils';

// Modules
import {AppRoutingModule} from './app-routing.module';
import {AresMaterialModule} from './modules/material.module';
import { SynchronicityComponent } from './roadtrips/components/synchronicity/synchronicity.component';
import {MarkdownModule} from 'ngx-markdown';


@NgModule({
  entryComponents: [
    ConfirmDialogComponent,
  ],
  declarations: [
    AppComponent,
    fromAresUsers.components,
    fromUtils.declarations,
    SynchronicityComponent
  ],
  imports: [
    // core modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,

    // shared modules
    CdkTableModule,
    CKEditorModule,
    FlexLayoutModule,
    AresMaterialModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    AppRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatTableModule,
  ],
  providers: [
    fromAresUsers.services,
    fromAresUsers.guards,
    fromUtils.services,
    JsontocsvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
