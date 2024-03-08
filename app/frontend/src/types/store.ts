export type typeStore = {
    user: typeUser,
}

export type typeUser = {
    email?: string
    tokens?: typeTokens
}

type typeTokens = {
    accessToken: string;
    refreshToken: string;
}