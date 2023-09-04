import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('', 'CreateOffer')
  Route.get('', 'ListOffers')
  Route.get('/:id', 'FindOffer')
  Route.put('/:id', 'UpdateOffer')
  Route.delete('/:id', 'DeleteOffer')
})
  .prefix('offers')
  .namespace('App/Modules/Offer/Actions')
  .middleware(['auth'])
