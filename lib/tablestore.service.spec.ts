import { Test, TestingModule } from '@nestjs/testing'

import { MODULE_OPTIONS_TOKEN } from './tablestore.module-definition'
import { TablestoreService } from './tablestore.service'

describe('TablestoreService', () => {
  let service: TablestoreService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TablestoreService,
        {
          provide: MODULE_OPTIONS_TOKEN,
          useValue: {
            endpoint: 'http://localhost:8080',
            accessKeyId: 'test',
            secretAccessKey: 'test',
            instancename: 'test',
          },
        },
      ],
    }).compile()

    service = module.get<TablestoreService>(TablestoreService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should create client', () => {
    expect(service.getClient()).toBeDefined()
  })
})
