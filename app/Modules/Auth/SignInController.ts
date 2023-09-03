import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SignInController {
  public async handle({ request }: HttpContextContract) {
    const credentials = request.body()

    return {
      status: true,
      token: 'dasdasda',
    }
  }
}
