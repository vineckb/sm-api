import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        sectionId: 1,
        title: 'Coca-Cola 2L',
        price: 8.99,
        imageUrl: 'coca-cola.jpg',
        barcode: '7894900011517',
        quantityStock: 50,
      },
      {
        sectionId: 2,
        title: 'Biscoito Trakinas',
        price: 2.99,
        imageUrl: 'trakinas.jpg',
        barcode: '7893333734017',
        quantityStock: 200,
      },
      {
        sectionId: 2,
        title: 'Biscoito Oreo',
        price: 4.75,
        imageUrl: 'oreo.jpg',
        barcode: '8992760121090',
        quantityStock: 120,
      },
      {
        sectionId: 3,
        title: 'Café 3 Corações Tradicional',
        price: 11,
        imageUrl: 'cafe.jpg',
        barcode: '7896005801093',
        quantityStock: 70,
      },
      {
        sectionId: 4,
        title: 'Arroz 5kg Tio João',
        price: 22.18,
        imageUrl: 'arroz.jpg',
        barcode: '7893500019800',
        quantityStock: 70,
      },
    ])
  }
}
