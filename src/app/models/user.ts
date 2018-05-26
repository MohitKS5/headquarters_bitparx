/**
 * Interface for User
 *
 * @interface IUser
 */
export interface IUser {
  name: string;
  facebook: {
    id: string,
  };
  email: {
    value: string,
    verified: boolean,
    verificationSent: boolean
  };
  personal: {
    birthday: Date,
    city: string,
    college: string,
    yearOfStudy: string,
    postalAddress: string,
    zipcode: number
    phoneNumber: string,
    whatsAppNumber: string,
    picture: string
  };
  firstUpdate: boolean;
  campus: {
    isAmbassador: boolean,
    posts: Array<string>,
    validPosts: Array<string>,
    likes: number,
    otherPoints: number,
    ideaPoints: number,
    totalPoints: number,
    isExclusive: boolean,
    exclusiveApproved: boolean
  };
  progress: number;
  registration: {
    mainfest: Array<string>
  };
  payment: {
    status: boolean,
    orders: Array<any>,
    all: Array<any>
  };
}

