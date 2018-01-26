import Mask from './src/mask.vue'
Mask.install = function (Vue, options) {
  Vue.component(Mask.name, Mask)
  Vue.directive('vuiMaskTop', {
    bind (el, binding, vnode) {
      if (binding.value) {
        el.classList.add('vui-mask-top')
      }
    },
    componentUpdated (el, binding) {
      if (binding.value) {
        el.classList.add('vui-mask-top')
      } else {
        el.classList.remove('vui-mask-top')
      }
    }
  })
}
export default Mask
