import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/current', 'LoadShoppingCart')
  Route.post('/:orderId/:productId', 'AddProduct')
  Route.put('/:orderId/:productId', 'UpdateProduct')
  Route.delete('/:orderId/:productId', 'DeleteProduct')
  Route.post('/:orderId/address/:addressId', 'SetAddress')
  Route.post('/:orderId', 'Checkout')
})
  .prefix('orders')
  .namespace('App/Modules/Order/Actions')
  .middleware(['auth'])
