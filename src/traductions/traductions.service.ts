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
    return await this.tradModel.find()
  }

  async getTraductionById(org: string, environnement: string, id: string) {
    return await this.tradModel.findOne({
      organisation: org,
      environnement,
      _id: id
    })
  }

  async getTraductionByOrganisation(organisation: string) {
    return await this.tradModel.find({ organisation })
  }

  async getTraductionByEnvironment(org: string, environnement: string) {
    return await this.tradModel.find({ organisation: org, environnement })
  }

  async createTraduction(traduction: Traductions) {
    return await this.tradModel.create(traduction)
  }
}
