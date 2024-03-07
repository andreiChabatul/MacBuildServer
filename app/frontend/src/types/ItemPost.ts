export type typeItemPost = {
    title: string,
    date: string,
    category: string,
    description: string
}

export type typeItemPostExtra = {
    image: string;
} & typeItemPost