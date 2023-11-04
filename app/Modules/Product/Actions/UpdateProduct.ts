import { v4 as uuid } from 'uuid'
import Product from 'App/Models/Product'
import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Drive from '@ioc:Adonis/Core/Drive'

export default class UpdateProduct {
  public async handle({ request, params }: HttpContextContract) {
    const { id } = params

    const updateProductSchema = schema.create({
      title: schema.string(),
      sectionId: schema.number(),
      barcode: schema.string([
        rules.unique({ table: 'products', column: 'barcode', whereNot: { id } }),
      ]),
      price: schema.number(),
      promotionalPrice: schema.number.optional(),
      externalId: schema.string.optional(),
      newImage: schema.file.optional({
        size: '2mb',
        extnames: ['jpg', 'gif', 'png'],
      }),
    })

    const { newImage, ...data } = await request.validate({ schema: updateProductSchema })

    let imageUrl = ''

    if (newImage) {
      await newImage.move(Application.publicPath('uploads'), {
        name: `${uuid()}.${newImage.extname}`,
      })
      imageUrl = await Drive.getUrl(newImage.fileName as string)
    }

    await Product.query()
      .where('id', id)
      .update({ ...data, imageUrl: imageUrl || undefined })

    return await Product.findOrFail(id)
  }
}
