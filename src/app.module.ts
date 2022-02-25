import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        AuthModule,
        MongooseModule.forRoot('mongodb://localhost/nestjs-auth-passport'),
        ConfigModule.forRoot({
            envFilePath: `${process.cwd()}/config/env/${
                process.env.NODE_ENV
            }.env`,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
