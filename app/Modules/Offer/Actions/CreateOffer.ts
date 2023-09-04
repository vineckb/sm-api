import Offer from 'App/Models/Offer'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class CreateOffer {
  public async handle({ request }: HttpContextContract) {
    const newOfferSchema = schema.create({
      productId: schema.number(),
      price: schema.number(),
      status: schema.boolean(),
      startsAt: schema.date(),
      endsAt: schema.date(),
    })

    const data = await request.validate({ schema: newOfferSchema })
    const newOffer = await Offer.create(data)

    return newOffer
  }
}
