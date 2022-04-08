import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [ClientModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
