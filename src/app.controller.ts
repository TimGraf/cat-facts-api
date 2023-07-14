import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CatFact } from './cat.fact.model';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    async getCatFact(): Promise<CatFact[]> {
        return await this.appService.getCatFact();
    }
}
