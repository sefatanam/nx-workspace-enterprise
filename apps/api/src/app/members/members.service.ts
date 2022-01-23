import {Injectable} from '@nestjs/common';
import {Member, MemberDto} from '@enterprise-angular/api-interfaces';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class MembersService {

  constructor(@InjectRepository(Member) private repo: Repository<Member>) {}

  async create(memberDto: MemberDto): Promise<Member> {
    const member = await this.repo.create({...memberDto});
    return await this.repo.save(member);
  }

  async getAll() {
    return await this.repo.find()
  }

  async findBy(id: number) {
    return this.repo.findOne({id})
  }
}
