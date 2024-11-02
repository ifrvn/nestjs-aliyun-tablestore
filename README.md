# nestjs-aliyun-tablestore

[![npm](https://img.shields.io/npm/v/nestjs-aliyun-tablestore?style=flat-square)](https://www.npmjs.com/package/nestjs-aliyun-tablestore)
[![License](https://img.shields.io/github/license/ifrvn/nestjs-aliyun-tablestore.svg?style=flat-square)](https://github.com/ifrvn/nestjs-aliyun-tablestore/blob/main/LICENSE)

用于 NestJS 的[阿里云表格存储](https://www.aliyun.com/product/ots)模块。

[Aliyun Tablestore](https://www.aliyun.com/product/ots) module for NestJS.

## 安装 | Installation

```bash
npm install nestjs-aliyun-tablestore
```

## 使用 | Usage

根据您的需要导入 `TablestoreModule` 并配置访问凭证。比如在 `app.module.ts` 文件中：

Import `TablestoreModule` and configure access credentials according to your needs. For example, in the `app.module.ts` file:

```typescript
import { Module } from '@nestjs/common'
import { TablestoreModule } from 'nestjs-aliyun-tablestore'

@Module({
  // 使用 AK 初始化 Initialize with Access Key
  TablestoreModule.register({
    endpoint: 'https://example.cn-hangzhou.ots.aliyuncs.com',
    accessKeyId: 'your-access-key-id',
    secretAccessKey: 'your-secret-access-key',
    instancename: 'your-instance-name',
    maxRetries: 20, // Optional
  }),
  // 使用 STS 初始化 Initialize with Session Token
  // TablestoreModule.register({
  //   endpoint: 'https://example.cn-hangzhou.ots.aliyuncs.com',
  //   accessKeyId: 'your-access-key-id',
  //   accessKeySecret: 'your-access-key-secret',
  //   instancename: 'your-instance-name',
  //   stsToken: 'your-sts-token',
  // }),
  // ...
})
export class AppModule {}

```

如果需要使用**异步配置**的方式：

If you want to use asynchronous configuration:

```typescript
import { Module } from '@nestjs/common'
import { TablestoreModule } from 'nestjs-aliyun-tablestore'

@Module({
  // 使用 AK 初始化 Initialize with Access Key
  TablestoreModule.registerAsync({
    useFactory: () => {
      return {
        endpoint: 'https://example.cn-hangzhou.ots.aliyuncs.com',
        accessKeyId: 'your-access-key-id',
        secretAccessKey: 'your-secret-access-key',
        instancename: 'your-instance-name',
        maxRetries: 20, // Optional
      }
    }
  }),
  // 使用 STS 初始化 Initialize with Session Token
  // TablestoreModule.registerAsync({
  //   useFactory: () => {
  //     return {
  //       endpoint: 'https://example.cn-hangzhou.ots.aliyuncs.com',
  //       accessKeyId: 'your-access-key-id',
  //       accessKeySecret: 'your-access-key-secret',
  //       instancename: 'your-instance-name',
  //       stsToken: 'your-sts-token',
  //     }
  //   }
  // }),
  // ...
})
export class AppModule {}

```

之后即可在您的 Service 中通过 `TablestoreService` 获取 SDK 客户端：

After that, you can get the SDK client through the `TablestoreService` in your service:

```typescript
import { Injectable } from '@nestjs/common'
import {
  Client as TablestoreClient,
  TablestoreService,
} from 'nestjs-aliyun-tablestore'

@Injectable()
export class AppService {
  private tablestoreClient: TablestoreClient
  constructor(private tablestore: TablestoreService) {
    this.tablestoreClient = tablestore.getClient()
  }
}
```

## License

MIT License
