import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export interface Message {
  message: string;
}

export class MemberDto {
  name = '';
  email = '';
  phone = '';
  address = '';
}


@Entity()
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export class Member {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column()
  address: string;
}
