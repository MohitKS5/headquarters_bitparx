export interface HindQuartersResponse{
  Code: number
  JSON: RegisterResponse
  Headers: any
}

export interface RegisterResponse{
    user_id: string
    access_token: string
    trade_server: string
    device_id: string
}
