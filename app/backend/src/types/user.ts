export interface IUser {
    email: string;
    password: string
}

export interface ITokens {
    accessToken: string;
    refreshToken: string;
}