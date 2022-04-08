import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { GetUserDto } from './dto/get-user.dto';
import { PostBadDto } from './dto/post-bad.dto';

@Controller()
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get('user/:id')
  getUser(@Param() getUserDto: GetUserDto) {
    return this.clientService.getById(getUserDto.id);
  }

  @Post('bad')
  badReq(@Body() body: PostBadDto) {
    return this.clientService.badReq(body.status);
  }
}
