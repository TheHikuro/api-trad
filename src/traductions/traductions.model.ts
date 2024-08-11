import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type TraductionsDocument = HydratedDocument<Traductions>

@Schema()
export class Traductions {
  @Prop()
  name: string

  @Prop()
  key: number

  @Prop()
  lang: string

  @Prop()
  value: string
}

export const TraductionsSchema = SchemaFactory.createForClass(Traductions)
