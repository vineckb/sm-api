import Mertchant from 'App/Models/Mertchant'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ListMertchants {
  public async handle(_: HttpContextContract) {
    return await Mertchant.all()
  }
}
