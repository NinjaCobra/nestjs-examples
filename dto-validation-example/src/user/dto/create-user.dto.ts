import { IsInt, Min, IsString, Length } from "class-validator";

export class CreateUserDTO {
    @IsString()
    name: string;

    @IsInt()
    @Min(18)
    age: number;

    @IsString()
    @Length(2, 2, { message: 'A UF deve conter exatamente duas letras.' })
    uf: string;
}