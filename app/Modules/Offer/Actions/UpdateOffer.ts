import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Offer from 'App/Models/Offer'

export default class UpdateOffer {
  public async handle({ request, params }: HttpContextContract) {
    const { id } = params

    const offer = await Offer.findOrFail(id)

    const offerValidationSchema = schema.create({
      title: schema.string(),
      active: schema.boolean.optional(),
      startsAt: schema.date(),
      endsAt: schema.date(),
    })

    const offerData = await request.validate({ schema: offerValidationSchema })
    offer.merge(offerData)
    await offer.save()

    const productsValidationSchema = schema.create({
      products: schema.array([rules.minLength(1)]).members(
        schema.object().members({
          productId: schema.number(),
          promotionalPrice: schema.number(),
        })
      ),
    })
    const { products } = await request.validate({ schema: productsValidationSchema })
    await offer.related('products').detach()

    await offer.related('products').attach(
      products.reduce((acc, curr) => {
        return { ...acc, [curr.productId]: { promotionalPrice: curr.promotionalPrice } }
      }, {})
    )

    return { ...offer.toJSON(), products }
  }
}
