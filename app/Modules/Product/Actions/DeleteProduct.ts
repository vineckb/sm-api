import Product from 'App/Models/Product'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DeleteProduct {
  public async handle({ params }: HttpContextContract) {
    await Product.query().where('id', params.id).delete()
  }
}
