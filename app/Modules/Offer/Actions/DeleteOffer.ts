import Offer from 'App/Models/Offer'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DeleteOffer {
  public async handle({ params }: HttpContextContract) {
    await Offer.query().where('id', params.id).delete()
  }
}
