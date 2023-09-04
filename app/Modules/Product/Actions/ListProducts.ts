import Product from 'App/Models/Product'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ListProducts {
  public async handle(_: HttpContextContract) {
    return await Product.all()
  }
}
