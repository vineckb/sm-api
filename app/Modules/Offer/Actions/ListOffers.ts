import Offer from 'App/Models/Offer'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ListOffers {
  public async handle(_: HttpContextContract) {
    return await Offer.all()
  }
}
