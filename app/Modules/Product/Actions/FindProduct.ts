import Product from 'App/Models/Product'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FindProduct {
  public async handle({ params }: HttpContextContract) {
    return await Product.findOrFail(params.id)
  }
}
