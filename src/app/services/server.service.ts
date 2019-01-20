import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../shared/registration.interface';
import { environment } from '../shared/environment';

@Injectable()
export class ServerService {
    constructor(private httpClient: HttpClient) {}
    public search(spell: string) {
        var url = environment.gateway + '/search/';
        var request = url.concat(spell);
        return this.httpClient.get(request);
    }

    public signUp(registration: Registration) {
        var url = environment.gateway + '/signup';
        var data = JSON.stringify(registration);
        console.log(data);
        return this.httpClient.post(url, data);
    }
}