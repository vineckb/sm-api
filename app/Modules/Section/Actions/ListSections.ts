import Section from 'App/Models/Section'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ListSections {
  public async handle(_: HttpContextContract) {
    return await Section.all()
  }
}
