import Section from 'App/Models/Section'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FindSection {
  public async handle({ params }: HttpContextContract) {
    return await Section.findOrFail(params.id)
  }
}
