import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ProductFactory } from 'Database/factories'

export default class extends BaseSeeder {
  public async run() {
    await ProductFactory.createMany(500)
  }
}
