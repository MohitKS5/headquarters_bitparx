import {ConfirmDialogComponent} from './confirm-dialog';
import {GoBackComponent} from './go-back';
import {Funcs} from './functions';
import {MaterialTableComponent} from './material-table/material-table.component';
import {FileDatabase} from './material-tree/material-tree.component';

export const declarations: any[] = [
  ConfirmDialogComponent,
  GoBackComponent,
  MaterialTableComponent,
];

export const services: any[] = [Funcs, FileDatabase];

export * from './confirm-dialog';
export * from './go-back';
export * from './functions';
export * from './material-table';
// export * from './material-tree';
