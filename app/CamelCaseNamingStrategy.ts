import { BaseModel } from '@ioc:Adonis/Lucid/Orm'
import { string } from '@ioc:Adonis/Core/Helpers'
import { ModelRelations, NamingStrategyContract } from '@ioc:Adonis/Lucid/Orm'

export class CamelCaseNamingStrategy implements NamingStrategyContract {
  /**
   * The default table name for the given model
   */
  public tableName(model: typeof BaseModel): string {
    return string.pluralize(string.snakeCase(model.name))
  }

  /**
   * The database column name for a given model attribute
   */
  public columnName(_: typeof BaseModel, attributeName: string): string {
    return string.snakeCase(attributeName)
  }

  /**
   * The post serialization name for a given model attribute
   */
  public serializedName(_: typeof BaseModel, attributeName: string): string {
    return string.camelCase(attributeName)
  }

  /**
   * The local key for a given model relationship
   */
  public relationLocalKey(
    relation: ModelRelations['__opaque_type'],
    model: typeof BaseModel,
    relatedModel: typeof BaseModel
  ): string {
    if (relation === 'belongsTo') {
      return relatedModel.primaryKey
    }

    return model.primaryKey
  }

  /**
   * The foreign key for a given model relationship
   */
  public relationForeignKey(
    relation: ModelRelations['__opaque_type'],
    model: typeof BaseModel,
    relatedModel: typeof BaseModel
  ): string {
    if (relation === 'belongsTo') {
      return string.camelCase(`${relatedModel.name}_${relatedModel.primaryKey}`)
    }

    return string.camelCase(`${model.name}_${model.primaryKey}`)
  }

  /**
   * Pivot table name for many to many relationship
   */
  public relationPivotTable(
    _: 'manyToMany',
    model: typeof BaseModel,
    relatedModel: typeof BaseModel
  ): string {
    return string.snakeCase([relatedModel.name, model.name].sort().join('_'))
  }

  /**
   * Pivot foreign key for many to many relationship
   */
  public relationPivotForeignKey(_: 'manyToMany', model: typeof BaseModel): string {
    return string.snakeCase(`${model.name}_${model.primaryKey}`)
  }

  /**
   * Keys for the pagination meta
   */
  public paginationMetaKeys(): {
    total: string
    perPage: string
    currentPage: string
    lastPage: string
    firstPage: string
    firstPageUrl: string
    lastPageUrl: string
    nextPageUrl: string
    previousPageUrl: string
  } {
    return {
      total: 'total',
      perPage: 'per_page',
      currentPage: 'current_page',
      lastPage: 'last_page',
      firstPage: 'first_page',
      firstPageUrl: 'first_page_url',
      lastPageUrl: 'last_page_url',
      nextPageUrl: 'next_page_url',
      previousPageUrl: 'previous_page_url',
    }
  }
}
