import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('users', 'CreateUser')
  Route.get('users', 'ListUsers')
}).namespace('App/Modules/User/Actions')
