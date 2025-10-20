import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @Render('index')
  async getList() {
    const powerbanks = await this.appService.getList()
    return {
      title: "Powerbanks",
      powerbanks: powerbanks
    }
  }
}
