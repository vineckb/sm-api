import Merchant from 'App/Models/Merchant'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class CreateMerchant {
  public async handle({ request }: HttpContextContract) {
    const newMerchantSchema = schema.create({
      name: schema.string(),
      slug: schema.string(),
    })

    const data = await request.validate({ schema: newMerchantSchema })
    const newMerchant = await Merchant.create(data)

    return newMerchant
  }
}
