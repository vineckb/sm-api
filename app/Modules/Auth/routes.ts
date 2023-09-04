import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('signin', 'SignIn')
}).namespace('App/Modules/Auth/Actions')
