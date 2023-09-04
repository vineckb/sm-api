import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('offers', 'TodayOffers')
})
  .namespace('App/Modules/Catalog/Actions')
  .prefix('catalog/')
