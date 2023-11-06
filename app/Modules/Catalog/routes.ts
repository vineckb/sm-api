import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('featured-sections', 'FeaturedSections')
  Route.get('sections', 'Sections')
})
  .namespace('App/Modules/Catalog/Actions')
  .prefix('catalog')
