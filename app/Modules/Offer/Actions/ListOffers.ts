import Offer from 'App/Models/Offer'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ListOffers {
  public async handle(_: HttpContextContract) {
    const offers = await Offer.query().preload('products').select('*')

    const transformed = offers.map((offer) => {
      return {
        ...offer.toJSON(),
        products: offer.products.map((product) => ({
          ...product.toJSON(),
          promotionalPrice: product.$extras.pivot_promotionalPrice,
        })),
      }
    })

    return transformed
  }
}
