import * as filters from './filters'

Reflect.ownKeys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
