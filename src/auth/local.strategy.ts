import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { User, UserAuthDetails } from "src/users/users.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        //needed to instantiate parent strategy
        //Optional config object to be passed as params to parent
        //constructor (eg: FB)
        super();
    }

    async validate(username: string, password:string): Promise<UserAuthDetails> {
        const user = await this.authService.validateUser(username,password);
        if(!user){
            throw new UnauthorizedException
        }

        return user;
    }
}