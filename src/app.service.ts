import { Injectable } from '@nestjs/common';
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
}
