export interface PaymentUser {
  name: string;
  college: string;
  order: {
    ticketAndDiscountList: [{
      ticketName: string,
      ticketPrice: number
    }],
    totalTicketAmount: string
    uniqueOrderId: string,
    verified: boolean
  };
  id: string;
  phone: string;
  email: string;
  mainfest: Array<string>;
}
