import {TypeOrmModule} from "@nestjs/typeorm";
import {Member} from "@enterprise-angular/api-interfaces";
import {MembersService} from "./members.service";
import {MembersController} from "./members.controller";
import {Module} from "@nestjs/common";


@Module({
  controllers: [MembersController],
  imports: [TypeOrmModule.forFeature([Member])],
  providers: [MembersService]
})
export class MembersModule {}
