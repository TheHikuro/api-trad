import { Test, TestingModule } from '@nestjs/testing'
import { TraductionsController } from './traductions.controller'
import { TraductionsService } from './traductions.service' // Import the service

describe('TraductionsController', () => {
  let controller: TraductionsController
  let service: TraductionsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TraductionsController],
      providers: [
        {
          provide: TraductionsService,
          useValue: {
            someMethod: jest.fn().mockResolvedValue('some value')
          }
        }
      ]
    }).compile()

    controller = module.get<TraductionsController>(TraductionsController)
    service = module.get<TraductionsService>(TraductionsService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
