export interface LodashImportsOptions {
  /**
   * Has from field
   */
  hasFrom?: boolean

  /**
   * Prefix for lodash imports
   */
  prefix?: string

  /**
   * Uppercase the first letter after the prefix
   */
  upperAfterPrefix?: boolean

  /**
   * Exclude keys from lodash
   */
  exclude?: (string | RegExp)[]
}

export interface LodashImportsResult {
  from: string
  imports: {
    name: string
    as: string
    from?: string
  }[]
}
