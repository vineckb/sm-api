import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class Offers {
  public async handle(_: HttpContextContract) {
    return await Product.query()
      .where('promotionalPrice', '>=', 0.01)
      .andWhere('active', true)
      // .andWhereRaw('quantity_stock - quantity_locked > 0')
      .limit(20)
  }
}
