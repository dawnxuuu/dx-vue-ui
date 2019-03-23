import DxButton from './DxButton'

const components = {
  DxButton
}

function install (Vue) {
  if (install.installed) return
  Object.values(components).forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.vue)
}

const API = {
  install,
  ...components
}

export default API
