import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string; //unbelievebly bad
}

export type UserAuthDetails = Pick<User, 'id' | 'name'>

@Injectable()
export class UsersService {
    //faking db.users table
    private readonly users: User[] = [
        {
            id: 1,
            name: 'Kenpachi',
            username: 'Hayaku',
            password: 'security'
        },
        {
            id: 2,
            name: 'Kenpachi',
            username: 'Hai',
            password: 'security'
        },

    ]

    async findOne(username:string) : Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }
}
