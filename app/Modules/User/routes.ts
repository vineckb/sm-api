import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('', 'CreateUser')
  Route.get('', 'ListUsers')
  Route.get('/:id', 'FindUser')
  Route.put('/:id', 'UpdateUser')
  Route.patch('/:id', 'PatchUser')
  Route.delete('/:id', 'DeleteUser')
})
  .prefix('/users')
  .namespace('App/Modules/User/Actions')
  .middleware(['auth'])
