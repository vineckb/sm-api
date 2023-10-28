import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'master@supermercadista.com.br',
        name: 'Master',
        password: 'topsecret',
        role: 'master',
      },
      {
        email: 'admin@mercadoeuropa.com.br',
        password: 'supersecret',
        name: 'Supermercado Europa',
        role: 'merchant',
      },
    ])
  }
}
