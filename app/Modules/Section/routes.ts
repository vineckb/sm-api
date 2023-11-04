import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('', 'CreateSection')
  Route.get('', 'ListSections')
  Route.put('/:id/active', 'UpdateActive')
  Route.get('/:id', 'FindSection')
  Route.put('/:id', 'UpdateSection')
  Route.put('/:id/stared', 'UpdateStared')
  Route.put('/:id/title', 'UpdateTitle')
  Route.delete('/:id', 'DeleteSection')
})
  .prefix('sections')
  .namespace('App/Modules/Section/Actions')
  .middleware(['auth'])
