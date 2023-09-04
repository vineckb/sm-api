import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('offers', 'CreateOffer')
  Route.get('offers', 'ListOffers')
})
  .namespace('App/Modules/Offer/Actions')
  .middleware(['auth'])
