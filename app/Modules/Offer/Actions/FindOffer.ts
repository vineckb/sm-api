import Offer from 'App/Models/Offer'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FindOffer {
  public async handle({ params }: HttpContextContract) {
    const offer = await Offer.query().preload('products').firstOrFail()

    return {
      ...offer.toJSON(),
      products: offer.products.map((product) => ({
        ...product.toJSON(),
        promotionalPrice: product.$extras.pivot_promotionalPrice,
      })),
    }
  }
}
