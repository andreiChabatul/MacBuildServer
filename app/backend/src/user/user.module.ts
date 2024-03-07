import { Module } from '@nestjs/common';
import { UserService } from './user.services';
import { FakeDb } from 'src/fakeDB/fakeDB';


@Module({
    imports: [],
    providers: [UserService, FakeDb],
    exports: [UserService]
})

export class UserModule { }
