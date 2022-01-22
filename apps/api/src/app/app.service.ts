import {Injectable} from '@nestjs/common';
import {Message} from '@enterprise-angular/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return {message: 'A message from server'};
  }


  getMembers() {
  }
}
