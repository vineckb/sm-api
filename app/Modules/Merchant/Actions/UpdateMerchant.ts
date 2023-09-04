import Merchant from 'App/Models/Merchant'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class UpdateMerchant {
  public async handle({ request, params }: HttpContextContract) {
    const { id } = params

    const newMerchantSchema = schema.create({
      name: schema.string(),
      slug: schema.string(),
    })

    const data = await request.validate({ schema: newMerchantSchema })

    await Merchant.query().where('id', id).update(data)

    return await Merchant.findOrFail(id)
  }
}
