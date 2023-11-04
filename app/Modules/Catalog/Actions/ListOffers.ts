import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ListOffers {
  public async handle(_: HttpContextContract) {
    return await Product.query().where('promotionalPrice', '>=', 0.01).andWhere('active', true)
  }
}
