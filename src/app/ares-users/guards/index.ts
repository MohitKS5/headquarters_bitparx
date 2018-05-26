import {LocalUserGuard, LevelGuard, LoggedInGuard} from './auth.guard';

export const guards: any[] = [
  LoggedInGuard,
  LevelGuard,
  LocalUserGuard
];

export * from './auth.guard';
