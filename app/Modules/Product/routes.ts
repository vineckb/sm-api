import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('', 'CreateProduct')
  Route.get('', 'ListProducts')
  Route.get('/:id', 'FindProduct')
  Route.put('/:id', 'UpdateProduct')
  Route.put('/:id/price', 'UpdatePrice')
  Route.put('/:id/promotional-price', 'UpdatePromotionalPrice')
  Route.delete('/:id', 'DeleteProduct')
})
  .prefix('products')
  .namespace('App/Modules/Product/Actions')
  .middleware(['auth'])
