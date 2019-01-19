import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerService {
    constructor(private httpClient: HttpClient) {}
    search(spell: string) {
        var url = 'http://localhost:4000/search/';
        var request = url.concat(spell);
        console.log(request);
        return this.httpClient.get(request);
    }
}