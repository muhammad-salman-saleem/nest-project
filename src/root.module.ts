import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { ChatModule } from './chat/chat.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [UserModule, OrderModule, ChatModule, BooksModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Application Root module loaded');
  }
}
