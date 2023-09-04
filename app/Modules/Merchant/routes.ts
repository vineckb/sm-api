import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('', 'CreateMerchant')
  Route.get('', 'ListMerchants')
})
  .prefix('/merchants')
  .namespace('App/Modules/Merchant/Actions')
  .middleware(['auth'])
