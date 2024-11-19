import { Body, Controller,Delete,Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CreateTodo, UpdateTodo } from './todo.dto';
 

@Controller('todo')
export class TodoController {

    constructor(private appservice:AppService){} 

    private todos = []
    @Post("/create")
    createTodo(@Body() data:CreateTodo){
        // for privatly saving the user data 
        const item = {
            id:new Date().getTime(),
            ...data,
            createAt:new Date().toLocaleString(),
            isComplete:false
        }
        this.todos.push(item)
       return {
           msg:"todo is created"
       }
    }


    @Get("/get.todos")
    getAllTodos(){     
       return {
        todos:this.todos,
        total:this.todos.length,
           msg:"todo fetched"
       }
    }


    @Put("/update/:id")
    updateTodoById(@Param('id') id:number , @Body() data:UpdateTodo){    
        const  new_todo = this.todos.map((cur,i)=>{
            if(cur.id==id){
                return  {
                    ...cur,
                    ['title']:data.title,
                    isComplete:true
                }
            }
            return  cur
        })
        this.todos = new_todo
       return {
           msg:"todo is updated"
       }
    }



    @Delete("/delete/:id")
    deleteTodoById(@Param('id') id:number ){    
        const  new_todo =  this.todos.filter((cur)=>cur.id!= id)
        this.todos = new_todo
       return {
           msg:"todo is deleted"
       }
    }
}


