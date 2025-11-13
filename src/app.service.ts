import { Injectable, Param } from '@nestjs/common';
import mysql from 'mysql2/promise';
import { Powerbank } from './powerbank';

@Injectable()
export class AppService {
  db = mysql.createPool({
    host: process.env.DB_HOST ?? 'localhost',
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_DATABASE ?? 'powerbank_db',
  });

  async getList(): Promise<Powerbank[]> {
    const [result] = await this.db.query(`SELECT id, name, brand, battery_time, charge_duration, cost, available FROM powerbanks`);
    return result as Powerbank[];
  }

  async getPowerbank(id: number): Promise<Powerbank> {
    const [result] = await this.db.query(`SELECT id, name, brand, battery_time, charge_duration, cost, available FROM powerbanks`);
    const powerbanks: Powerbank[] = result as Powerbank[];
    return powerbanks[id]
  }

  async createPowerbank(powerbank: Powerbank): Promise<void> {
    const query = `INSERT INTO powerbanks (name, brand, battery_time, charge_duration, cost, available) VALUES (?, ?, ?, ?, ?, ?)`
    const param = [powerbank.name, powerbank.brand, powerbank.battery_time, powerbank.charge_duration, powerbank.cost, powerbank.available]
    await this.db.query(query, param)
  }

  async deletePowerbank(powerbankid: number): Promise<void> {
    const query = `DELETE FROM powerbanks WHERE id = ?`
    const param = [powerbankid]
    await this.db.query(query, param)
  }

  async modifyPowerbank(powerbank: Powerbank, powerbankid: number): Promise<void> {
    var query = ``
    if (powerbank.name != null && powerbank.name != "" && powerbank.brand != null && powerbank.brand != "" && powerbank.battery_time != null && powerbank.battery_time != 0 && powerbank.charge_duration != null && powerbank.charge_duration != 0 && powerbank.cost != null) {
      query = `UPDATE powerbanks SET name= ? , brand= ?, battery_time= ? , charge_duration= ? , cost= ? , available= ? WHERE id = ?;`
    }
    const param = [powerbank.name, powerbank.brand, powerbank.battery_time, powerbank.charge_duration, powerbank.cost, powerbank.available, powerbankid]

    if (query != `` && query != null) {
      await this.db.query(query, param)
    }
  }
}
