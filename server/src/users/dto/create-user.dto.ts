import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'testemail@gmail.com', description: 'Почта пользователя'})
    readonly email: string;
    @ApiProperty({example: '12345678', description: 'Пароль пользователя'})
    readonly password: string;
}