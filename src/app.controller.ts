import { Controller, Get, Render,Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


// @Get("/user/:name")
// @Render('index')
// index(@Param("name") name:string){
//   return {name}
// }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/login")
  loginFun(){
    return {
      Name:"Parashuram"
    }
  }
 }
