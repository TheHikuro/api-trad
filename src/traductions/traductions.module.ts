import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Traductions, TraductionsSchema } from './traductions.model'
import { TraductionsController } from './traductions.controller'
import { TraductionsService } from './traductions.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Traductions.name, schema: TraductionsSchema }
    ])
  ],
  controllers: [TraductionsController],
  providers: [TraductionsService]
})
export class TraductionsModule {}
