import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Section from 'App/Models/Section'

export default class HomeSections {
  public async handle(_: HttpContextContract) {
    return await Section.query()
      .where('active', true)
      .andWhere('stared', true)
      .preload('products', (productQuery) => {
        productQuery.where('active', true)
      })
  }
}
