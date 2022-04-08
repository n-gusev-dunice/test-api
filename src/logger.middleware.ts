import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { originalUrl, body } = request;
    const start = new Date();

    response.on('finish', () => {
      const { statusCode } = response;
      const resBody = JSON.stringify(response.get('body'));
      const reqTime = Date.now() - start.getMilliseconds();

      this.logger.log(
        `date: ${start.toDateString()}; route: ${originalUrl}; reqBody: ${body}; status: ${statusCode}; resBody: ${resBody}; reqTime: ${reqTime}`,
      );
    });

    next();
  }
}
