import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  reset(): string {
    return 'OK!';
  }
}
