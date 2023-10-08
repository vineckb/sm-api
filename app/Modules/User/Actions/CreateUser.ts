import User from 'App/Models/User'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CreateUser {
  public async handle({ request }: HttpContextContract) {
    const newUserSchema = schema.create({
      name: schema.string(),
      email: schema.string([rules.unique({ table: 'users', column: 'email' })]),
      password: schema.string(),
      role: schema.enum(['master', 'supervisor', 'bagger', 'delivery', 'customer'] as const),
    })

    const data = await request.validate({ schema: newUserSchema })
    const newUser = await User.create(data)

    return newUser
  }
}
