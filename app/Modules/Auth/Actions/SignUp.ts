import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Merchant from 'App/Models/Merchant'
import slugify from 'slugify'

export default class SignUp {
  public async handle({ request, auth, response }: HttpContextContract) {
    const newUserSchema = schema.create({
      merchantId: schema.number.optional(),
      merchantName: schema.string.optional(),
      name: schema.string(),
      email: schema.string([rules.unique({ table: 'users', column: 'email' })]),
      username: schema.string([rules.unique({ table: 'users', column: 'username' })]),
      password: schema.string(),
      role: schema.enum(['master', 'merchant', 'manager', 'contributor', 'customer'] as const),
    })

    const data = await request.validate({ schema: newUserSchema })

    if (!data.merchantId) {
      if (!data.merchantName) {
        return response.status(422).send({
          errors: [
            {
              rule: 'required',
              field: 'merchantName',
              message: 'required validation failed',
            },
          ],
        })
      }

      const merchant = await Merchant.create({
        name: data.merchantName,
        slug: slugify(data.merchantName),
      })

      data.merchantId = merchant.id
    }
    const newUser = await User.create(data)
    const token = await auth.use('api').generate(newUser)

    return { token }
  }
}
