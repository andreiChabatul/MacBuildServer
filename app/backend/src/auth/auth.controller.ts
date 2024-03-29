import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  login(@Body() createAuthDto: AuthDto) {
    return this.authService.login(createAuthDto);
  }

  @Post('register')
  register(@Body() createAuthDto: AuthDto) {
    return this.authService.register(createAuthDto);
  }

}
