import { Module } from '@nestjs/common'

import { ConfigurableModuleClass } from './tablestore.module-definition'
import { TablestoreService } from './tablestore.service'

@Module({
  providers: [TablestoreService],
  exports: [TablestoreService],
})
export class TablestoreModule extends ConfigurableModuleClass {}
