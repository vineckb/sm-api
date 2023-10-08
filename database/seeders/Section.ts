import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Section from 'App/Models/Section'

export default class extends BaseSeeder {
  public async run() {
    await Section.createMany([
      { title: 'Bebidas' },
      { title: 'Biscoitos e Bolachas' },
      { title: 'Café' },
      { title: 'Gãos' },
    ])
  }
}
