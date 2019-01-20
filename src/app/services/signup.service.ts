import { ServerService } from '../services/server.service';
import { Registration } from '../shared/registration.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class SignupService {
    constructor(private serverService: ServerService){}
    public signUp(registration: Registration) {
        this.serverService.signUp(registration).
            subscribe(
                (response) => console.log(response),
                (err) => console.log(err)
            );
    }
}