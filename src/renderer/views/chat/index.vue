<template>
  <div class="wrap">
    <Header/>
    <back />
    <div class="layout-content-wrap">
      <ReceptionArea />
      <workSpace></workSpace>
    </div>
  </div>
</template>
<script>
import Header from '@/views/header'
import ReceptionArea from '@/views/receptionArea'
import workSpace from '@/views/workSpace';
export default {
  components: {
    Header,
    ReceptionArea,
    workSpace,
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.wrap{
  height: 100%;
  .layout-content-wrap{
      height: calc(100% - 60px);
      display: flex;
      overflow: hidden;
  }
}
</style>

