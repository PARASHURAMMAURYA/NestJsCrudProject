import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! , Winter is Coming';
  }



  createTodo(){
    return "todo created"
  }
}
