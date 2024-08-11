import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type TraductionsDocument = HydratedDocument<Traductions>

@Schema()
export class Traductions {
  @Prop({ type: String })
  name: string

  @Prop({ type: Number })
  key: number

  @Prop({ type: Map, of: String })
  value: { [lang: string]: string }
}

export const TraductionsSchema = SchemaFactory.createForClass(Traductions)
