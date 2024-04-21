import { RegisterUserDto } from "../dtos/auth/registerUser.dto";
import { UserEntity } from "../entities/user.entity";
import { LoginUserDto } from '../dtos/auth/loginUser.dto';

export abstract class AuthDataSource {
  abstract login(loginUserDto:LoginUserDto):Promise<UserEntity>;
  abstract register(registerUserDto:RegisterUserDto):Promise<UserEntity>;
}