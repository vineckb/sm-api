import Section from 'App/Models/Section'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DeleteSection {
  public async handle({ params }: HttpContextContract) {
    await Section.query().where('id', params.id).delete()
  }
}
