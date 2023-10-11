import Offer from 'App/Models/Offer'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TodayOffers {
  public async handle(_: HttpContextContract) {
    const today = new Date().toISOString()
    return await Offer.query().preload('products')
    // .where('starts_at', '<=', today)
    // .andWhere('ends_at', '>=', today)
  }
}
