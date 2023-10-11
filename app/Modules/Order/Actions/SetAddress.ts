import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SetAddress {
  public async handle(_: HttpContextContract) {
    return 'ok'
  }
}
