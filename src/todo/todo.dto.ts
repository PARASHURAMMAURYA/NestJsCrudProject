import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateTodo{
    @IsNotEmpty({message:'Name must be required'})
    name:string
    
    @IsEmail()
    @IsNotEmpty({message:'Email must be required'})
    email:string
}


export class UpdateTodo{ 
    title:string
    name:string
    email:string
}
