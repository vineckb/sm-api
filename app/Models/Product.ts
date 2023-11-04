import { DateTime } from 'luxon'
import { BaseModel, HasOne, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Section from './Section'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public active: boolean

  @column()
  public barcode: string

  @column()
  public sectionId: number

  @hasOne(() => Section, {
    localKey: 'sectionId',
    foreignKey: 'id',
  })
  public section: HasOne<typeof Section>

  @column()
  public title: string

  @column()
  public imageUrl: string

  @column()
  public price: number

  @column()
  public promotionalPrice: number

  @column()
  public packSize: number

  @column()
  public quantityUnity: string

  @column()
  public quantityStock: number

  @column()
  public quantitySold: number

  @column()
  public quantityLocked: number

  @column.dateTime()
  public syncedAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
