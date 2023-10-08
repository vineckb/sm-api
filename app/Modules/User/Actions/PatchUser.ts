import User from 'App/Models/User'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PatchUser {
  public async handle({ request, params }: HttpContextContract) {
    const { id } = params

    const body = request.only(['name', 'email', 'role'])

    await User.query().where('id', id).update(body)

    return await User.findOrFail(id)
  }
}
