import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { SectionFactory } from 'Database/factories'

export default class extends BaseSeeder {
  public async run() {
    await SectionFactory.createMany(10)
  }
}
