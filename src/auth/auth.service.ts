import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserAuthDetails, UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    
    constructor(
        private usersService: UsersService, 
        private jwtService: JwtService
        )
    {}

    async validateUser(username: string, password: string): Promise<UserAuthDetails> {
        const user = await this.usersService.findOne(username);

        if(user?.password === password) {
            return {id: user.id, name: user.name};
        }
        return null;
    }

    login(user: UserAuthDetails): {access_token: string}{
        const payload = {
            name: user.name,
            sub: user.id,
        }

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
