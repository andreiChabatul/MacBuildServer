export type typeInputs = {
    email: string
    password: string
}

export type typeForm = 'login' | 'register';
export type typePropsForm = { type: typeForm };
export type nameForm = { [key in typeForm]: string };