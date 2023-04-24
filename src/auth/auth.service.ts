import { Injectable } from '@nestjs/common';
import { User, UserAuthDetails, UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    
    constructor(private usersService: UsersService){}

    async validateUser(username: string, password: string): Promise<UserAuthDetails> {
        const user = await this.usersService.findOne(username);

        if(user?.password === password) {
            return {id: user.id, name: user.name};
        }
        return null;
    }

}
