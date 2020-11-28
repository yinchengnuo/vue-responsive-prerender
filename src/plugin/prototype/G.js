import $store from '@/store'
import $router from '@/router'

const ElementFuns = ['$alert', '$confirm', '$loading', '$message', '$msgbox', '$notify', '$prompt'] // 全局变量能够访问的 ElementUI 上的方法

const vmObj = { $router }
Vue.nextTick(() => {
  vmObj.$store = $store
})

export default new Proxy({ // 一定定义全局对象 G。如果想要在 G 对象中的方法中调用 G 中的方法，使用 this
  window,
  console,
  document,
  // 注册 EventBus
  $event: new Vue(),
  // 注册 clone
  $clone: data => JSON.parse(JSON.stringify(data)),

  // 注册全局自定义请求方法
  $request(api, callback = () => {}, conf = {}) {
    const {
      noLoading, // 请求不 loading
      endStillLoading, // 请求结束仍然 loading
      sucMsg // 自定义请求成功消息提示
    } = conf
    noLoading ? '' : this._loading = this.$loading()
    return new Promise((resolve, reject) => {
      if (api.length) { // 如果是数组，表示并发请求
        Promise.all(api).then((res) => {
          resolve(res.map(({ data = {}}) => data))
          callback(res.map(({ data = {}}) => data))
          sucMsg && this.$message.success(sucMsg)
        }).catch(error => {
          reject(error)
          this._loading.close()
        }).finally(() => {
          endStillLoading || (this._loading && this._loading.close())
        })
      } else {
        api.then(({ code, message, data = {}}) => { // 发送网络请求
          if (code === 200) {
            resolve(data)
            callback(data)
            sucMsg && this.$message.success(sucMsg)
          } else {
            reject(message || 'code 不为 200')
          }
        }).catch(error => {
          reject(error)
          this._loading.close()
        }).finally(() => {
          endStillLoading || (this._loading && this._loading.close())
        })
      }
    })
  },

  $compression(file, size = 20, device = 4) {
    if (file[0]) {
      return Promise.all(Array.from(file).map(e => this.$compression(e, size))) // 如果是 file 数组返回 Promise 数组
    } else {
      return new Promise((resolve) => {
        const reader = new FileReader() // 创建 FileReader
        reader.onload = ({ target: { result: src }}) => {
          const fileSize = Number((file.size / 1024).toFixed(2))
          if (fileSize <= size) {
            resolve({ file: file, origin: file, beforeSrc: src, afterSrc: src, beforeKB: fileSize + 'KB', afterKB: fileSize + 'KB', detail: [], quality: null })
          } else {
            const image = new Image() // 创建 img 元素
            image.onload = async() => {
              const canvas = document.createElement('canvas') // 创建 canvas 元素
              canvas.width = image.width
              canvas.height = image.height
              canvas.getContext('2d').fillStyle = '#fff'
              canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height)
              canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height) // 绘制 canvas
              let canvasURL, miniFile
              let L = true
              let quality = 0
              const detail = []
              let start = Date.now()
              for (let i = 1; i <= device; i++) {
                canvasURL = canvas.toDataURL('image/jpeg', L ? (quality += 1 / (2 ** i)) : (quality -= 1 / (2 ** i)))
                const buffer = atob(canvasURL.split(',')[1])
                let length = buffer.length
                const bufferArray = new Uint8Array(new ArrayBuffer(length))
                while (length--) {
                  bufferArray[length] = buffer.charCodeAt(length)
                }
                miniFile = new File([bufferArray], file.name, { type: 'image/jpeg' });
                (miniFile.size / 1024) > size ? L = false : L = true
                detail.push({
                  quality,
                  size: miniFile.size,
                  kb: Number((miniFile.size / 1024).toFixed(2)),
                  time: Date.now() - start
                })
                start = Date.now()
              }
              resolve({
                detail,
                quality,
                file: miniFile,
                origin: file,
                beforeSrc: src,
                afterSrc: canvasURL,
                beforeKB: Number((file.size / 1024).toFixed(2)),
                afterKB: Number((miniFile.size / 1024).toFixed(2))
              })
            }
            image.src = src
          }
        }
        reader.readAsDataURL(file)
      })
    }
  },

  $download(download, name) {
    if (download instanceof Array) {
      // import('@/vendor/Export2Excel').then(excel => {
      //   excel.export_json_to_excel({
      //     header: Object.keys(download[0]),
      //     data: download.map(listItem => Object.keys(download[0]).map(j => listItem[j])),
      //     filename: name || '下载Excel',
      //     bookType: 'xlsx'
      //   })
      // })
    } else {
      const a = document.createElement('a')
      a.href = download
      a.download = name || download
      a.click()
    }
  },

  $copy(text, message = '复制成功') {
    text = String(text).trim()
    if (!text) return
    let input = document.createElement('input')
    input.setAttribute('value', text)
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    input.remove()
    input = null
    if (message) {
      this.$message.success(message)
    }
  },

  $scrollTo(to = 0, duration, callback) {
    Math.easeInOutQuad = function(t, b, c, d) {
      t /= d / 2
      if (t < 1) {
        return c / 2 * t * t + b
      }
      t--
      return -c / 2 * (t * (t - 2) - 1) + b
    }
    const requestAnimFrame = (function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60) }
    })()
    const move = amount => {
      document.documentElement.scrollTop = amount
      document.body.parentNode.scrollTop = amount
      document.body.scrollTop = amount
    }
    const position = () => {
      return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop
    }
    const start = position()
    const change = to - start
    const increment = 20
    let currentTime = 0
    duration = (typeof (duration) === 'undefined') ? 500 : duration
    var animateScroll = function() {
      currentTime += increment
      var val = Math.easeInOutQuad(currentTime, start, change, duration)
      move(val)
      if (currentTime < duration) {
        requestAnimFrame(animateScroll)
      } else {
        if (callback && typeof (callback) === 'function') {
          callback()
        }
      }
    }
    animateScroll()
  }
}, {
  get(target, key) {
    if (ElementFuns.find(e => e === key)) {
      return Reflect.get(Vue.prototype, key)
    } else if (Reflect.get(vmObj, key)) {
      return Reflect.get(vmObj, key)
    } else {
      return Reflect.get(target, key)
    }
  }
})
