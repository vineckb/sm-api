import Offer from 'App/Models/Offer'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CreateOffer {
  public async handle({ request }: HttpContextContract) {
    const newOfferSchema = schema.create({
      title: schema.string(),
      active: schema.boolean.optional(),
      startsAt: schema.date(),
      endsAt: schema.date(),
    })

    const data = await request.validate({ schema: newOfferSchema })
    const newOffer = await Offer.create(data)

    const productsSchema = schema.create({
      products: schema.array([rules.minLength(1)]).members(
        schema.object().members({
          productId: schema.number(),
          promotionalPrice: schema.number(),
        })
      ),
    })
    const { products } = await request.validate({ schema: productsSchema })
    await newOffer.related('products').attach(
      products.reduce((acc, curr) => {
        return { ...acc, [curr.productId]: { promotionalPrice: curr.promotionalPrice } }
      }, {})
    )

    return { ...newOffer.toJSON(), products }
  }
}
