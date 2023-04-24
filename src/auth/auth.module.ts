import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt-strategy';

@Module({
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy
  ],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: "SHOULDBEINENV",  //Should be in environments
      signOptions: {
        expiresIn: '5m'
      }
    })
  ],
  exports: [AuthService]
})
export class AuthModule { }
