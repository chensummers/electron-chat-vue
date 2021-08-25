export const pickerShowParams = {
  currentTarget: {
    getBoundingClientRect: function() {
      return {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
      }
    }
  }
}
