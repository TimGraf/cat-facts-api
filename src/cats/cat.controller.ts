import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatFact } from './models/cat.fact.model';

@Controller('catfacts')
export class CatController {
    constructor(private readonly appService: CatService) {}

    @Get()
    async getCatFact(): Promise<CatFact[]> {
        return await this.appService.getCatFact();
    }
}
