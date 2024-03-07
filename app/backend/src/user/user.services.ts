import { Injectable } from '@nestjs/common';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { FakeDb } from 'src/fakeDB/fakeDB';
import { IUser } from 'src/types/user';
import { hashSync } from 'bcryptjs';


@Injectable()
export class UserService {

    constructor(private fakeDb: FakeDb) { }

    async getUser(email: string): Promise<IUser | null> {
        return await this.fakeDb.getUnigue(email);
    }

    async saveUser(dto: AuthDto): Promise<IUser | null> {
        const hashPassword = hashSync(dto.password, 5);
        return await this.fakeDb.addUser({ ...dto, password: hashPassword });
    }
}
