import User from 'App/Models/User'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UpdateProduct {
  public async handle({ request, params }: HttpContextContract) {
    const { id } = params

    const newUserSchema = schema.create({
      title: schema.string(),
      sku: schema.string([rules.unique({ table: 'products', column: 'sku', whereNot: { id } })]),
      barcode: schema.string([
        rules.unique({ table: 'products', column: 'barcode', whereNot: { id } }),
      ]),
      price: schema.number(),
    })

    const data = await request.validate({ schema: newUserSchema })

    await User.query().where('id', id).update(data)

    return await User.findOrFail(id)
  }
}
