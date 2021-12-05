import { IsNotEmpty } from "class-validator";

export class AuthCredentialsDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    password: string;
}