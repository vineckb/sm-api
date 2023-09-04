import Merchant from 'App/Models/Merchant'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FindMerchant {
  public async handle({ params }: HttpContextContract) {
    return await Merchant.findOrFail(params.id)
  }
}
