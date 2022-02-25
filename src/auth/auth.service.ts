import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './auth.model';
import { LoginUserDto, RegisterUserDto } from './dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private jwtService: JwtService,
    ) {}

    async registerUser(dto: RegisterUserDto) {
        const user = new this.userModel(dto);
        await user.save();
        return { success: true, id: user._id };
    }

    async loginUser(dto: LoginUserDto) {
        const user = await this.userModel.findOne({ email: dto.email });

        if (!user || user.password !== dto.password)
            throw new BadRequestException('incorrect email or password');

        return this.signUser(user.id, user.username, user.email, 'user');
    }

    signUser(id: string, username: string, email: string, type: string) {
        return this.jwtService.sign({ id, username, email, type });
    }
}
