import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Offer from 'App/Models/Offer'

export default class extends BaseSeeder {
  public async run() {
    const offer = await Offer.create({
      title: 'Ofertas do dia',
      active: true,
    })

    await offer.related('products').attach({
      1: { promotionalPrice: 7.99 },
      2: { promotionalPrice: 1.5 },
      3: { promotionalPrice: 3.99 },
      4: { promotionalPrice: 9.99 },
      5: { promotionalPrice: 16.99 },
    })
  }
}
