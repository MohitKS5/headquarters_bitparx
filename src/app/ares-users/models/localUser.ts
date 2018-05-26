export interface LocalUser {
  user_id: string;
  levelsCurrent: Array<string>;
  levelsRequested: Array<string>;
  uid: string;
  displayName: string;
  email: string | null;
}

export class ILocalUser implements LocalUser {
  user_id: string;
  levelsCurrent: Array<string>;
  levelsRequested: Array<string>;
  uid: string;
  displayName: string;
  email: string | null;
  device_id: string
  constructor() {}
}

export const defaultUser = {
  levelsCurrent: [],
  levelsRequested: [],
  uid: '',
  displayName: '',
  email: null,
};
