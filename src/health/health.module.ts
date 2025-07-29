import { Module } from '@nestjs/common';

import { GetHealthController } from './controllers/getHealth';

@Module({
  controllers: [GetHealthController],
})
export class HealthModule {}
