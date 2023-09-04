import Merchant from 'App/Models/Merchant'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DeleteMerchant {
  public async handle({ params }: HttpContextContract) {
    await Merchant.query().where('id', params.id).delete()
  }
}
