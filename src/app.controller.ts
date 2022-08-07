import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body('token') token: string): Promise<any> {
    return this.appService
      .getHello(token)
      .then((decodedToken) => {
        return {
          ok: true,
          data: decodedToken,
        };
      })
      .catch((err) => {
        return {
          ok: false,
          message: err,
        };
      });
  }
}
