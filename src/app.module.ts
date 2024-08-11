import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersController } from './users/users.controller'
import { UsersService } from './users/users.service'
import { UsersModule } from './users/users.module'
import {
  TraductionsController,
  TraductionsModule,
  TraductionsService
} from './traductions'

@Module({
  imports: [TraductionsModule, UsersModule],
  controllers: [AppController, TraductionsController, UsersController],
  providers: [AppService, TraductionsService, UsersService]
})
export class AppModule {}
