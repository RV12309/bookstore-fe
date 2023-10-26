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


