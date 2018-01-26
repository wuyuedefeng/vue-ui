<template>
  <div>
    <vui-mask :show="showMask" style="height: 100px; overflow: auto">
      <div style="color: #f00">I'm in mask bottom</div>
      <div v-vui-mask-top="topText" style="color: #f00">I'm in mask top</div>
    </vui-mask>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showMask: true,
      topText: true
    }
  }
}
</script>
