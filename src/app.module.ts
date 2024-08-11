import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { TraductionsModule } from './traductions'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    TraductionsModule,
    UsersModule,
    MongooseModule.forRoot(process.env.MONGO_URI!)
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
