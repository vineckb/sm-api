import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Merchant from 'App/Models/Merchant'
import slugify from 'slugify'

export default class SignUp {
  public async handle({ request, auth, response }: HttpContextContract) {
    const newUserSchema = schema.create({
      merchantId: schema.number.optional(),
      name: schema.string(),
      email: schema.string([rules.unique({ table: 'users', column: 'email' })]),
      password: schema.string(),
      role: schema.enum([
        'master',
        'merchant',
        'supervisor',
        'delivery',
        'bagger',
        'customer',
      ] as const),
    })

    const data = await request.validate({ schema: newUserSchema })
    const newUser = await User.create(data)

    if (data.role === 'merchant') {
      const newMerchantSchema = schema.create({
        merchantName: schema.string(),
      })
      const { merchantName } = await request.validate({ schema: newMerchantSchema })

      const merchant = await Merchant.create({
        name: merchantName,
        slug: slugify(merchantName),
        master: newUser.id,
      })

      newUser.merchantId = merchant.id
      await newUser.save()
    }

    const token = await auth.use('api').generate(newUser)

    return { token }
  }
}
