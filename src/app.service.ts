import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    protectedRoute() {
        return 'protected route';
    }
}
