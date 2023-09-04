import User from 'App/Models/User'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UpdateUser {
  public async handle({ request, params }: HttpContextContract) {
    const { id } = params

    const newUserSchema = schema.create({
      name: schema.string(),
      username: schema.string([
        rules.unique({ table: 'users', column: 'username', whereNot: { id } }),
      ]),
      email: schema.string([rules.unique({ table: 'users', column: 'email', whereNot: { id } })]),
      role: schema.enum(['master', 'merchant', 'manager', 'contributor', 'customer'] as const),
    })

    const data = await request.validate({ schema: newUserSchema })

    await User.query().where('id', id).update(data)

    return await User.findOrFail(id)
  }
}
