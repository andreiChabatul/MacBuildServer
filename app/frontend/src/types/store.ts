export type typeStore = {
    user: typeUser,
    status: "idle" | "loading" | "succeeded" | "failed",
    error: string
}

export type typeUser = {
    email?: string
    tokens?: typeTokens
}

type typeTokens = {
    accessToken: string;
    refreshToken: string;
}