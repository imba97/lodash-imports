# lodash-imports

[Lodash](https://lodash.com/) auto import for [unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import).

## Install

```
pnpm add lodash-imports -D
```

## Usage

```ts
// vite.config.ts
import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import LodashImports from 'lodash-imports'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        'vue',
        // ...
        LodashImports()
      ]
    })
  ]
})
```

## Options

```ts
interface LodashImportsOptions {
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
```

## Acknowledgement

- [nuxt-lodash](https://github.com/cipami/nuxt-lodash)
