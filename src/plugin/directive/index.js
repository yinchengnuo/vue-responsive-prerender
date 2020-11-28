import waves from './waves'
import sticky from './sticky'
import elDragDialog from './el-drag-dialog'

Vue.directive('waves', waves) // 注册全局水波纹
Vue.directive('sticky', sticky) // 注册全局吸顶
Vue.directive('el-drag-dialog', elDragDialog) // 注册全局 el-dialog 拖拽

Vue.directive('button-auth-control', { // 注册全局自定义按钮权控指令 `v-button-permission`
  bind: (el, { arg }, { context: { $route }}) => {
    if (!($route.meta.buttons && $route.meta.buttons.includes(arg))) {
      Vue.nextTick(() => el.remove())
    }
  }
})

Vue.directive('img', { // 注册全局自定义快速读取 excel `v-img:9.formData` `v-img.base64`
  inserted: (el, { value, arg, modifiers: { formData, base64 }}) => {
    const max = isNaN(Number(arg)) ? 1 : Number(arg)
    const id = String(Date.now() + Math.floor(Math.random() * (10 ** 16)))
    const input = document.createElement('input')
    el['excel-id'] = id
    el['excel-event'] = () => document.getElementById(id).click()
    input.id = id
    input.type = 'file'
    input.style.display = 'none'
    input.multiple = max ? 'multiple' : ''
    input.accept = '.jpg, .jpeg, .gif, .png'
    el.addEventListener('click', el['excel-event'])
    input.onchange = ({ target: { files }}) => {
      files = Array.from(files).slice(0, max)
      if (!files.length) return
      if (formData) {
        const formDate = new FormData()
        for (let i = 0; i < files.length; i++) {
          const file = files[i]
          formDate.append('img', file)
        }
        value(formDate)
      } else if (base64) {
        let i = 0
        const list = []
        files.forEach(file => {
          const reader = new FileReader()
          reader.onloadend = e => {
            list.push(e.target.result)
            i++
            if (i === files.length) {
              value(list)
            }
          }
          reader.readAsDataURL(file)
        })
      } else {
        value(files)
      }
      input.value = ''
    }
    document.body.appendChild(input)
  },
  unbind: el => {
    el = document.getElementById(el['excel-id'])
    el.removeEventListener('click', el['excel-event'])
    el.remove()
  }
})

