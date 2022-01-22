/* eslint-disable @typescript-eslint/ban-ts-comment */
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
    //@ts-ignore
  id: number;
  @Column()
    //@ts-ignore
  name: string;
  @Column()
    //@ts-ignore
  email: string;
  @Column()
    //@ts-ignore
  phone: string;
  @Column()
    //@ts-ignore
  address: string;
}
