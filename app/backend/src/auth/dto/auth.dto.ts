import { IsEmail, IsNotEmpty, MinLength, IsString } from "class-validator"

export class AuthDto {

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    readonly email: string

    @IsNotEmpty()
    @MinLength(6)
    @IsString()
    readonly password: string
}
