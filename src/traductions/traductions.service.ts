import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Traductions } from './traductions.model'
import { Model } from 'mongoose'

@Injectable()
export class TraductionsService {
  constructor(
    @InjectModel(Traductions.name) private tradModel: Model<Traductions>
  ) {}

  async getAllTraductions() {
    return this.tradModel.find()
  }
}
