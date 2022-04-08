import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class ClientService {
  private users = [
    {
      id: '12',
      name: 'vasya',
      password: '32167',
    },
    {
      id: '42',
      name: 'petya',
      password: '331210',
    },
  ];
  getById(userId: string) {
    const user = this.users.find(({ id }) => id === userId);
    if (!user) throw new NotFoundException('user not found');
    const { id, name } = user;
    return { id, name };
  }

  badReq(status: number) {
    throw new BadRequestException({ message: 'Bad Req', status });
  }
}
