<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
export default {
  name: 'iconSvg',
  props: {
    iconClass: { type: String, required: true },
    className: { type: String, default: '' }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>
<style scoped>
.svg-icon {
  width: 2em;
  height: 2em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
