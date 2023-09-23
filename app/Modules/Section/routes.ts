import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('', 'CreateSection')
  Route.get('', 'ListSections')
  Route.get('/:id', 'FindSection')
  Route.put('/:id', 'UpdateSection')
  Route.delete('/:id', 'DeleteSection')
})
  .prefix('sections')
  .namespace('App/Modules/Section/Actions')
  .middleware(['auth'])
