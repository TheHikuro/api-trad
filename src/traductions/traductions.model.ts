import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type TraductionsDocument = HydratedDocument<Traductions>

@Schema()
export class Traductions {
  @Prop({ type: String, required: true })
  key: string

  @Prop({ required: true, type: Object })
  value: Record<string, string>

  @Prop({ type: String, required: true })
  organisation: string

  @Prop({ type: String, required: true })
  environment: string
}

export const TraductionsSchema = SchemaFactory.createForClass(Traductions)

export const createSchema = {
  type: 'object',
  properties: {
    key: { type: 'string' },
    value: {
      type: 'object',
      additionalProperties: { type: 'string' }
    },
    organisation: { type: 'string' },
    environment: { type: 'string' }
  },
  required: ['key', 'value', 'organisation', 'environment']
}
