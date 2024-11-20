import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { AppService } from 'src/app.service';
import { AuthenticationMiddleware } from 'src/authentication/authentication.middleware';


@Module({
    controllers:[TodoController],
    providers:[TodoService,AppService]
})
export class TodoModule {
    // implements NestModule
    // configure(consumer: MiddlewareConsumer) {
    //    consumer.apply(AuthenticationMiddleware)
    //    .forRoutes('todo')
    // }
}
