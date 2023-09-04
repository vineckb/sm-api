import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Offer from './Offer'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public sku: string

  @column()
  public barcode: string

  @column()
  public price: number

  @column()
  public externalId: string

  @column()
  public quantityStock: number

  @column()
  public quantityLocked: number

  @column.dateTime()
  public syncedAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Offer)
  public offers: HasMany<typeof Offer>
}
