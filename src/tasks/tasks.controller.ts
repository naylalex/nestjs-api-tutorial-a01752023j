[tasks/controller.ts]
import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {

    @Get()
    getTasks() {
        return null;
    }

    @Get(':id')
    getTaskById() {
        return null;
    }

    @Post()
    createTask() {
        return null;
    }
