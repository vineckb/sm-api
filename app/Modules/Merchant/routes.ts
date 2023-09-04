import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('', 'CreateMerchant')
  Route.get('', 'ListMerchants')
  Route.get('/:id', 'FindMerchant')
  Route.put('/:id', 'UpdateMerchant')
  Route.delete('/:id', 'DeleteMerchant')
})
  .prefix('merchants')
  .namespace('App/Modules/Merchant/Actions')
  .middleware(['auth'])
