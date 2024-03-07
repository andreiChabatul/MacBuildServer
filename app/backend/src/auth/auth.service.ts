import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.services';
import { compareSync } from 'bcryptjs';
import { ITokens, IUser } from 'src/types/user';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private userService: UserService, private jwtService: JwtService,) { }

  async register(dto: AuthDto): Promise<Omit<IUser, 'password'> & ITokens> {
    const candidate = await this.userService.getUser(dto.email);
    if (candidate) {
      throw new ConflictException('Пользователь существует');
    }
    const user = await this.userService.saveUser(dto);
    return { email: dto.email, ...await this.generateTokens(user) };
  }

  async login(dto: AuthDto): Promise<Omit<IUser, 'password'> & ITokens> {
    const user = await this.userService.getUser(dto.email);
    if (user && compareSync(dto.password, user.password)) {
      return { email: dto.email, ...await this.generateTokens(user) };
    }
    throw new UnauthorizedException('Неверный логин или пароль');
  }

  private async generateTokens(user: IUser): Promise<ITokens> {
    const data = { email: user.email };
    const accessToken = 'Bearer ' + this.jwtService.sign(data, { expiresIn: '1h' });
    const refreshToken = this.jwtService.sign(data, { expiresIn: '24h' });
    return { accessToken, refreshToken };
  }

}
