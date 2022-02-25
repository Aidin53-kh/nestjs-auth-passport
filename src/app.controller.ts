import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller()
export class AppController {
    constructor(private appService: AppService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    protectedRoute() {
        return this.appService.protectedRoute();
    }
}
