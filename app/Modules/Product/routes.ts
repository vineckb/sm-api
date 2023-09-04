import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('products', 'CreateProduct')
  Route.get('products', 'ListProducts')
}).namespace('App/Modules/Product/Actions')
