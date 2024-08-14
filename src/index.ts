import { resolveModule } from 'local-pkg'
import * as lodash from 'lodash-es'

import defaultExclude from './exclude'

import type { LodashImportsOptions } from './types'

export default function (options: LodashImportsOptions = {}) {
  const {
    prefix = '_',
    upperAfterPrefix = false,
    exclude = []
  } = options

  const mergedExclude: (string | RegExp)[] = [...defaultExclude, ...exclude]

  return {
    from: resolveModule('lodash-imports/lodash', {
      platform: 'posix'
    }),
    imports: Object.keys(lodash)
      .filter((key) => {
        return !mergedExclude.some((excluded) => {
          if (typeof excluded === 'string') {
            return key === excluded
          } else {
            return excluded.test(key)
          }
        })
      })
      .map(key => ({
        name: key,
        as: `${prefix}${upperAfterPrefix ? lodash.upperFirst(key) : key}`,
      }))
  }
}
