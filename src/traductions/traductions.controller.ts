import { Controller, Get } from '@nestjs/common'
import { TraductionsService } from './traductions.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('traductions')
@ApiTags('Traductions')
export class TraductionsController {
  constructor(private readonly traductionsService: TraductionsService) {}

  @Get('/all')
  getAllTraductions() {
    return this.traductionsService.getAllTraductions()
  }
}
