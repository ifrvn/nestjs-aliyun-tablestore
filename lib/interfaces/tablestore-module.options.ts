export interface TablestoreAKOptions {
  endpoint: string
  accessKeyId: string
  secretAccessKey: string
  instancename: string
  maxRetries?: number
}

export interface TablestoreSTSOptions {
  endpoint: string
  accessKeyId: string
  accessKeySecret: string
  stsToken: string
  instancename: string
}

export type TablestoreModuleOptions = TablestoreAKOptions | TablestoreSTSOptions
