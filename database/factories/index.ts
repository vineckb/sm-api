import Factory from '@ioc:Adonis/Lucid/Factory'
import Product from 'App/Models/Product'
import Section from 'App/Models/Section'

const images = ['arroz', 'biz', 'cafe', 'coca-cola', 'oreo', 'trakinas']

export const ProductFactory = Factory.define(Product, ({ faker }) => {
  const stock = faker.number.int({ min: 50, max: 1000 })
  const price = faker.number.float({ min: 3, max: 50, precision: 2 })
  return {
    title: faker.commerce.product.name,
    sectionId: faker.number.int({ min: 1, max: 10 }),
    imageUrl: `/uploads/${images[faker.number.int({ min: 0, max: 5 })]}.jpg`,
    price,
    promotionalPrice:
      Math.random() < 0.5 ? faker.number.float({ min: price * 0.8, max: price, precision: 2 }) : 0,
    quantityStock: stock,
    quantityLocked: faker.number.int({ min: 0, max: stock }),
    quantitySold: faker.number.int({ min: 0, max: 400 }),
  }
}).build()

export const SectionFactory = Factory.define(Section, ({ faker }) => {
  return {
    title: faker.lorem.words({ min: 1, max: 2 }),
    stared: Math.random() < 0.5,
  }
}).build()
