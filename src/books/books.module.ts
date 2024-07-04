import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { AuthMiddleware } from 'src/auth/auth.middleware';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('books');
  }
}
