import {LoggedUserService} from './logged-user';
import {LocalUserService} from './manage';

export const services: any[] = [
  LocalUserService,
  LoggedUserService
];

export * from './logged-user';
export * from './manage';
