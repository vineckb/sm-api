import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ListProductsInSession {
  public async handle({ params }: HttpContextContract) {
    return await Product.query()
      .where('active', true)
      .andWhere('section_id', params.id)
      .andWhereRaw('quantity_stock - quantity_locked > 0')
  }
}
