import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Section from 'App/Models/Section'

export default class ListSections {
  public async handle(_: HttpContextContract) {
    return await Section.query().where('active', true)
  }
}
