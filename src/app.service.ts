import { Injectable } from '@nestjs/common';
import { CatFact } from './cat.fact.model';

@Injectable()
export class AppService {
    private CAT_SERVICE_URL = 'https://cat-fact.herokuapp.com/facts';

    private transformData(data: any): CatFact {
        return <CatFact>{
            id: data._id,
            fact: data.text
        };
    }

    async getCatFact(): Promise<CatFact[]> {
        return await fetch(this.CAT_SERVICE_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                return data.map((element) => {
                    return this.transformData(element);
                });
            });
    }
}
