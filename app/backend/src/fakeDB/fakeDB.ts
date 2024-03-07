import { IUser } from "src/types/user";

const FAKE_DB: IUser[] = [
    {
        email: 'test.mail.ru',
        password: '312d23d323123wev123123'
    },
    {
        email: 'test1.mail.ru',
        password: '312d23d323123wev123123'
    },
    {
        email: 'test2.mail.ru',
        password: '312d23d323123wev123123'
    }
]

export class FakeDb {

    getUnigue(email: string): Promise<IUser | null> {

        return new Promise((resolve) => {
            const user = FAKE_DB.filter((user) => user.email === email);
            setTimeout(() => {
                resolve(user[0] || null);
            }, 500);
        })
    }

    addUser(user: IUser): Promise<IUser> {
        return new Promise((resolve) => {
            setTimeout(() => {
                FAKE_DB.push(user)
                resolve(user);
            }, 500);
        })
    }

}