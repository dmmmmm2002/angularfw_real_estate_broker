export interface User {
    email: string;
    password: string;
    name: {
        forename: string;
        surname: string;
    }
}