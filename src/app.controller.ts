import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Redirect,
  Render,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Powerbank } from './powerbank';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @Render('index')
  async getList() {
    const powerbanks = await this.appService.getList();
    return {
      title: 'Powerbanks',
      powerbanks: powerbanks,
    };
  }

  @Get('/addpb')
  @Render('addPB')
  getAddPBForm() {
    return { title: 'New powerbank' };
  }

  @Post('/addpb')
  @Redirect('/')
  async addPB(@Body() powerbank: any) {
    const newPowerbank: Powerbank = {
      name: powerbank.name,
      brand: powerbank.brand,
      battery_time: powerbank.battery_time,
      charge_duration: powerbank.charge_duration,
      cost: powerbank.cost,
      available: powerbank.available,
    };
    await this.appService.createPowerbank(newPowerbank);
  }

  @Get('/deletepb')
  @Render('deletePB')
  async getRemovePBForm() {
    const powerbanks = await this.appService.getList();
    return { title: 'Remove powerbank', powerbanks: powerbanks };
  }

  @Post('/deletepb')
  @Redirect('/')
  async removePB(@Body() powerbank: any) {
    await this.appService.deletePowerbank(powerbank.id);
  }

  @Get('/modifypb')
  @Render('modifyPB')
  async getModifyPBForm() {
    const powerbanks = await this.appService.getList();
    return { title: 'Modify powerbank', powerbanks: powerbanks };
  }

  @Post('/modifypb')
  @Redirect('/')
  async modifyPB(@Body() powerbank: any) {
    const modifyPowerbank: Powerbank = {
      name: powerbank.name,
      brand: powerbank.brand,
      battery_time: powerbank.battery_time,
      charge_duration: powerbank.charge_duration,
      cost: powerbank.cost,
      available: powerbank.available,
    };
    await this.appService.modifyPowerbank(modifyPowerbank, powerbank.id)
  }

  @Get('/readme')
  @Render('readMe')
  getReadMe() {}
}
