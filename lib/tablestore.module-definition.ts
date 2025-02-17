import { ConfigurableModuleBuilder } from '@nestjs/common'

import { TablestoreModuleOptions } from './interfaces'

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<TablestoreModuleOptions>().build()
