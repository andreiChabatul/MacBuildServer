import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { options } from './config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule, JwtModule.registerAsync(options()),],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
