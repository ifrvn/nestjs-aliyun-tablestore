import { Inject, Injectable } from '@nestjs/common'
import * as TableStore from 'tablestore'

import {
  TablestoreAKOptions,
  TablestoreModuleOptions,
  TablestoreSTSOptions,
} from './interfaces'
import { MODULE_OPTIONS_TOKEN } from './tablestore.module-definition'

@Injectable()
export class TablestoreService {
  private client: TableStore.Client

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: TablestoreModuleOptions
  ) {
    if (this.isAKOptions(options)) {
      this.client = new TableStore.Client({
        endpoint: options.endpoint,
        accessKeyId: options.accessKeyId,
        secretAccessKey: options.secretAccessKey,
        instancename: options.instancename,
        maxRetries: options.maxRetries,
      })
    } else if (this.isSTSOptions(options)) {
      this.client = new TableStore.Client({
        endpoint: options.endpoint,
        accessKeyId: options.accessKeyId,
        accessKeySecret: options.accessKeySecret,
        stsToken: options.stsToken,
        instancename: options.instancename,
      })
    } else {
      throw new Error('Invalid options')
    }
  }

  private isAKOptions(
    options: TablestoreModuleOptions
  ): options is TablestoreAKOptions {
    return 'secretAccessKey' in options
  }

  private isSTSOptions(
    options: TablestoreModuleOptions
  ): options is TablestoreSTSOptions {
    return 'accessKeySecret' in options && 'stsToken' in options
  }

  getClient(): TableStore.Client {
    return this.client
  }
}
