export interface ILoginForm {
    username: string,
    password: string
}

export interface ILogin {
    code?: string,
    message?: string,
    data?: any
}

export interface IRegisterForm {
    username: string,
    email: string,
    password: string
}

export interface IVerifyForm {
    username: string,
    verificationCode: string
}
export interface IJWTResponse {
  role: IRole[];
  account: IAccount;
  username: string;
  sub: string;
  iat: number;
  exp: number;
}

interface IAccount {
  isDeleted: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt?: any;
  updatedAt?: any;
  id: number;
  username: string;
  password?: any;
  email: string;
  type: string;
  userId?: any;
  isEnabled: boolean;
  verificationCode?: any;
  isVerified: boolean;
  verificationExpiredAt?: any;
}

interface IRole {
  authority: string;
}
