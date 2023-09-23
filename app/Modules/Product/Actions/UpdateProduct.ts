import Product from 'App/Models/Product'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UpdateProduct {
  public async handle({ request, params }: HttpContextContract) {
    const { id } = params

    const validationSchema = schema.create({
      title: schema.string(),
      section_id: schema.number(),
      sku: schema.string([rules.unique({ table: 'products', column: 'sku', whereNot: { id } })]),
      barcode: schema.string([
        rules.unique({ table: 'products', column: 'barcode', whereNot: { id } }),
      ]),
      price: schema.number(),
    })

    const data = await request.validate({ schema: validationSchema })

    await Product.query().where('id', id).update(data)

    return await Product.findOrFail(id)
  }
}
