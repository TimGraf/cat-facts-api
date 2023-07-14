import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    constructor() {}

    @Get()
    getHealthCheck(): any {
        return 'Service healthy';
    }
}
