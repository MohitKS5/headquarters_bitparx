import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,MatSidenavModule, MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule, MatTreeModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

export const modules = [
  CdkTableModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule,
  MatListModule,
  MatTableModule,
  MatSidenavModule,
  MatTreeModule,
  MatSlideToggleModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatSortModule,
];
@NgModule({
  imports: modules,
  exports: modules
})
export class AresMaterialModule {
}
