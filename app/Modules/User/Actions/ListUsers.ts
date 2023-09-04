import User from 'App/Models/User'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ListUsers {
  public async handle(_: HttpContextContract) {
    return await User.all()
  }
}
