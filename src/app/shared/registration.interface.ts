// JSON.stringify transfers "last_name" to "lastName", need to keep the backend code to the same form
export interface Registration {
    lastName: string;
    firstName: string;
    email: string;
    password: string;
    confirmPassword: string;
}