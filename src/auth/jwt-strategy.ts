import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";
import { User, UserAuthDetails } from "src/users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        //needed to instantiate parent strategy
        //Optional config object to be passed as params to parent
        //constructor (eg: FB)
        super({
            secretOrKey: "SHOULDBEINENV",
            ignoreExpiration: false,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        });
    }

    validate(payload: {name: string, sub: number}): UserAuthDetails {
        return {
            id: payload.sub,
            name: payload.name
        };
    }
}