import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('offers', 'ListOffers')
  Route.get('sections/:id', 'ListSecions')
})
  .namespace('App/Modules/Catalog/Actions')
  .prefix('catalog')
