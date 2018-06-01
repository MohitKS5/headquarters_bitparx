export interface BitServResponse<T>{
  Code: number
  JSON: T
  Headers: any
}

export interface Register{
    user_id: string
    access_token: string
    trade_server: string
    device_id: string
    accountlevels: any
}

// response for Levels
export interface ReceivedAccessLevels{
  Username: string
  Access: Access
}

export interface Access{
  Admin: NullBool;
  Moderator: NullBool;
}

export interface NullBool{
  Bool: boolean;
  Valid: boolean;
}

export function flattenNullBool(obj: NullBool): boolean{
  return obj.Bool && obj.Valid
}
