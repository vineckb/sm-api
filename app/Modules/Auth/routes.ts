import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('auth/signin', 'SignInController')
}).namespace('App/Modules/Auth')
