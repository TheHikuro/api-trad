import { Controller, Get } from '@nestjs/common'
import { TraductionsService } from './traductions.service'

@Controller('traductions')
export class TraductionsController {
  constructor(private readonly traductionsService: TraductionsService) {}

  @Get('/traductions-all')
  getAllTraductions() {
    return this.traductionsService.getAllTraductions()
  }
}
