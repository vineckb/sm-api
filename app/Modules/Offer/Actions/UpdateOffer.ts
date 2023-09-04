import User from 'App/Models/User'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class UpdateOffer {
  public async handle({ request, params }: HttpContextContract) {
    const { id } = params

    const newUserSchema = schema.create({
      productId: schema.number(),
      price: schema.number(),
      status: schema.boolean(),
      startsAt: schema.date(),
      endsAt: schema.date(),
    })

    const data = await request.validate({ schema: newUserSchema })

    await User.query().where('id', id).update(data)

    return await User.findOrFail(id)
  }
}
