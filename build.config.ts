import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/lodash'
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
