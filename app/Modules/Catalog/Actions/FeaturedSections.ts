import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import Section from 'App/Models/Section'

export default class FeaturedSections {
  public async handle(_: HttpContextContract) {
    const sections = await Section.query()
      .where('active', true)
      .where('stared', true)
      .preload('products', (productsQuery) => {
        productsQuery.where('active', true).andWhereRaw('quantity_stock - quantity_locked > 0')
      })

    const offers = await Product.query()
      .where('promotionalPrice', '>=', 0.01)
      .andWhere('active', true)
      .andWhereRaw('quantity_stock - quantity_locked > 0')

    return [
      {
        title: 'Ofertas do dia',
        id: 0,
        products: offers,
      },
      ...sections,
    ]
  }
}
