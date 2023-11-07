import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import Section from 'App/Models/Section'

export default class ShowSection {
  public async handle({ params }: HttpContextContract) {
    const section = await Section.findOrFail(params.id)

    const products = await Product.query()
      .where('active', true)
      .andWhere('section_id', section.id)
      .andWhereRaw('quantity_stock - quantity_locked > 0')

    return { ...section.toJSON(), products }
  }
}
