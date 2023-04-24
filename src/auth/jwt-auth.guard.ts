import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

//local tells passport which strategy to use
//Registered in strategy in providers (local.strategy.ts)
//to parent constructor.

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') { } //Tells guard what guard it is using