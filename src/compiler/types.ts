import { IsInt, IsNotEmpty, IsString, Min, ValidationArguments } from 'class-validator';

export interface ConfigDatabase {
    host?: string;
    port?: number;
    user?: string;
    password?: string;
    database?: string;
    connectionLimit?: number;
    dateStrings?: boolean | Array<'TIMESTAMP' | 'DATETIME' | 'DATE'>;
}
export class Person {
    @IsNotEmpty({ message: "Name should not be empty." })
    @IsString({ message: "Name should be string." })
    name?: string;

    @IsInt({ message: "Age should be number."})
    @Min(0, { message: (args: ValidationArguments) => {
        return `Age can't be ${args.value}. Age should be over ${args.constraints[0]} at least.`
    } })
    age?: number;

    @IsString({ message: "Job should be string." })
    job?: string;
}