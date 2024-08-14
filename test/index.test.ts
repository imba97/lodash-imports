import { describe, it, expect } from 'vitest'

import LodashImports from '../src'

describe('lodash-imports', () => {
  it('default', async () => {
    const imports = LodashImports()
    expect(imports.imports[0]).toMatchInlineSnapshot(`
      {
        "as": "_add",
        "name": "add",
      }
    `)
  })

  it('exclude', async () => {
    const imports = LodashImports({
      exclude: ['add']
    })

    expect(imports.imports[0]).toMatchInlineSnapshot(`
      {
        "as": "_after",
        "name": "after",
      }
    `)
  })

  it('prefix', async () => {
    const imports = LodashImports({
      prefix: 'my',
      upperAfterPrefix: true
    })

    expect(imports.imports[0]).toMatchInlineSnapshot(`
      {
        "as": "myAdd",
        "name": "add",
      }
    `)
  })
})


