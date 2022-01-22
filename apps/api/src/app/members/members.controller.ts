import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {Member, MemberDto} from "@enterprise-angular/api-interfaces";
import {MembersService} from "./members.service";

@Controller('members')
export class MembersController {
  constructor(private service: MembersService) {}

  @Get()
  async getData(): Promise<Member[]> {
    console.log("Fetched")
    return await this.service.getAll();
  }

  @Post()
  async createMember(@Body() member: MemberDto) {
    return await this.service.create(member)
  }

  @Get(':id')
  async test(@Param('id') id: number) {
    return await this.service.findBy(id);
  }
}
