import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post
} from '@nestjs/common'
import { TraductionsService } from './traductions.service'
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger'
import { createSchema, Traductions } from './traductions.model'

@Controller('traductions')
@ApiTags('Traductions')
export class TraductionsController {
  constructor(private readonly traductionsService: TraductionsService) {}

  @Get('/all')
  getAllTraductions() {
    return this.traductionsService.getAllTraductions()
  }

  @Get('/:org/:environment/:id')
  @ApiParam({ name: 'org', type: String })
  @ApiParam({ name: 'environment', type: String })
  @ApiParam({ name: 'id', type: String })
  getTraductionById(
    @Param('org') org: string,
    @Param('environment') env: string,
    @Param('id') id: string
  ) {
    return this.traductionsService.getTraductionById(org, env, id)
  }

  @Get('/:org')
  @ApiParam({ name: 'org', type: String })
  getTraductionByOrganisation(@Param('org') organisation: string) {
    return this.traductionsService.getTraductionByOrganisation(organisation)
  }

  @Get('/:org/:environment')
  @ApiParam({ name: 'org', type: String })
  @ApiParam({ name: 'environment', type: String })
  getTraductionByEnvironment(
    @Param('org') org: string,
    @Param('environment') environment: string
  ) {
    return this.traductionsService.getTraductionByEnvironment(org, environment)
  }

  @Post('/create')
  @ApiBody({ schema: createSchema })
  async createTraduction(@Body() traduction: Traductions) {
    try {
      return await this.traductionsService.createTraduction(traduction)
    } catch (error) {
      throw new HttpException(
        `Internal server error: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }
}
