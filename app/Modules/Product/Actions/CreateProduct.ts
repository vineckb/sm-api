import Product from 'App/Models/Product'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CreateProduct {
  public async handle({ request }: HttpContextContract) {
    const newProductSchema = schema.create({
      title: schema.string(),
      sku: schema.string([rules.unique({ table: 'products', column: 'sku' })]),
      barcode: schema.string([rules.unique({ table: 'products', column: 'barcode' })]),
      price: schema.number(),
    })

    const data = await request.validate({ schema: newProductSchema })
    const newProduct = await Product.create(data)

    return newProduct
  }
}
