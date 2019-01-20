import { ServerService } from '../services/server.service'
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
    constructor(private serverService: ServerService){}
    public searchWord(spell: string) {
        this.serverService.search(spell).
            subscribe(
                (response) => console.log(response),
                (err) => console.log(err)
            );
    }
}