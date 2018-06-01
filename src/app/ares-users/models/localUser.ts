export interface LocalUser {
  user_id: string;
  levelsCurrent: Array<string>;
  levelsRequested: Array<string>;
  uid: string;
  username: string;
  email: string | null;
  accountlevels: any;
}

export class ILocalUser implements LocalUser {
  user_id: string;
  levelsCurrent: Array<string>;
  levelsRequested: Array<string>;
  uid: string;
  username: string;
  email: string | null;
  device_id: string;
  accountlevels: any;
  constructor() {}
}

export const defaultUser = {
  levelsCurrent: [],
  levelsRequested: [],
  uid: '',
  displayName: '',
  email: null,
};
