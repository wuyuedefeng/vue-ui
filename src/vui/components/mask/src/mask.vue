<template>
  <div class="vui-mask">
    <slot></slot>
    <div class="show-mask" v-if="show"></div>
  </div>
</template>

<script>
import PageScroll from '../../../asserts/javascripts/utils/pageScroll'
export default {
  name: 'VuiMask',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    lockWhenShow: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    show: {
      handler (newVal) {
        if (newVal && this.lockWhenShow) {
          this.$nextTick(() => {
            PageScroll.lock(this.$el)
          })
        } else {
          PageScroll.unlock(this.$el)
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../asserts/stylesheets/mixins/var";
  .vui-mask {
    position: relative;
    .show-mask {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.4);
      left: 0; right: 0; top: 0; bottom: 0;
    }
  }
</style>

<style lang="scss">
  .vui-mask {
    .vui-mask-top {
      position: relative;
      z-index: 1;
    }
  }
</style>
