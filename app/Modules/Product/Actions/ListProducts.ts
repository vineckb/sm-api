import Product from 'App/Models/Product'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class ListProducts {
  public async handle({ request }: HttpContextContract) {
    const input = await request.validate({
      schema: schema.create({
        q: schema.string.optional(),
        page: schema.number.optional(),
        limit: schema.number.optional(),
        sectionId: schema.number.optional(),
      }),
    })

    const q = request.input('q')
    const page = input.page && input.page > 1 ? input.page : 1
    const limit = input.limit && input.limit > 0 ? input.limit : 100

    const query = Product.query()
      .limit(limit)
      .offset((page - 1) * limit)

    if (q) {
      query.where((query) => {
        const searchPattern = `%${q}%`
        query
          .whereILike('title', searchPattern)
          .orWhereILike('sku', searchPattern)
          .orWhereILike('barcode', searchPattern)
      })
    }

    if (input.sectionId) {
      query.where('sectionId', input.sectionId)
    }

    const products = await query.select('*')

    return products
  }
}
