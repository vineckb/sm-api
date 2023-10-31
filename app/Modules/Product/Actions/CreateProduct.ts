import { v4 as uuid } from 'uuid'
import Product from 'App/Models/Product'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Application from '@ioc:Adonis/Core/Application'
import Drive from '@ioc:Adonis/Core/Drive'

export default class CreateProduct {
  public async handle({ request }: HttpContextContract) {
    const newProductSchema = schema.create({
      title: schema.string(),
      sectionId: schema.number(),
      barcode: schema.string([rules.unique({ table: 'products', column: 'barcode' })]),
      price: schema.number(),
      externalId: schema.string.optional(),
      newImage: schema.file.optional({
        size: '2mb',
        extnames: ['jpg', 'gif', 'png'],
      }),
    })

    const { newImage, ...data } = await request.validate({ schema: newProductSchema })
    let imageUrl = ''

    if (newImage) {
      await newImage.move(Application.publicPath('uploads'), {
        name: `${uuid()}.${newImage.extname}`,
      })
      imageUrl = await Drive.getUrl(newImage.fileName as string)
    }

    const newProduct = await Product.create({ ...data, imageUrl })

    return newProduct
  }
}
