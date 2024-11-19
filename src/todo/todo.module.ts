import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { AppService } from 'src/app.service';

@Module({
    controllers:[TodoController],
    providers:[TodoService,AppService]
})
export class TodoModule {}
