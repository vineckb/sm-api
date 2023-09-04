import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('signin', 'SignIn')
  Route.post('signup', 'SignUp')
}).namespace('App/Modules/Auth/Actions')
