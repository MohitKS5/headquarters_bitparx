export interface BitServResponse<T> {
  Code: number
  JSON: T
  Headers: any
}

// register
export interface Register {
  user_id: string
  access_token: string
  trade_server: string
  device_id: string
  accountlevels: any
}

// response for Levels
export interface ReceivedAccessLevels {
  Username: string
  Access: Access
}

export interface Access {
  Admin: NullBool;
  Moderator: NullBool;
}

export interface NullBool {
  Bool: boolean;
  Valid: boolean;
}

export function flattenNullBool(obj: NullBool): boolean {
  return obj.Bool && obj.Valid
}

// for accounts
export interface ReceivedAccounts {
  UserID: string
  Username: string
  ServerName: string
  Profile: profile
  Created: string
}

export interface profile {
  Username: string
  DisplayName: string
  AvatarURL: string
}

// devices
export interface ReceivedDevices {
  ID: string
  UserID: string
  Created: string
}
