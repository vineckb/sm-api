import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('', 'CreateProduct')
  Route.get('', 'ListProducts')
  Route.get('/:id', 'FindProduct')
  Route.put('/:id', 'UpdateProduct')
  Route.delete('/:id', 'DeleteProduct')
})
  .prefix('products')
  .namespace('App/Modules/Product/Actions')
