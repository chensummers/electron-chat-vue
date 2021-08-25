<template>
    <div class="back" @click="goBack">
        <a-icon type="left-circle" :style="{ fontSize: '16px', color: '#08c' }"/>
    </div>
</template>
<script>
export default {
    name:'go-back',
    methods:{
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
.back {
    position: fixed;
    top: 65px;
    left: 10px;
}
</style>


