import Merchant from 'App/Models/Merchant'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ListMerchants {
  public async handle(_: HttpContextContract) {
    return await Merchant.all()
  }
}
