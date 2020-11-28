import G from './G'

Object.setPrototypeOf(Vue.prototype, G) // 将 Vue.prototype 的原型设置为全局变量。既防止 prototype 命名冲突，又复用了 G 对象上的方法。
