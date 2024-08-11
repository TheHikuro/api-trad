import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type TraductionsDocument = HydratedDocument<Traductions>

@Schema()
export class Traductions {
  @Prop()
  name: string

  @Prop()
  age: number

  @Prop()
  breed: string
}

export const TraductionsSchema = SchemaFactory.createForClass(Traductions)
