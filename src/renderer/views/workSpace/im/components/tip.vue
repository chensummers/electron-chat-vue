<template>
    <div class="tip">
        <icon-svg icon-class="icon-right-arrow" class="icon"></icon-svg>
        主诉：{{tip}}
    </div>
</template>
<script>
export default {
    props:{
        tip:String
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
    .tip {
        font-size: 16px;
        background: #EBF3FF;
        color: #2173F9;
        line-height: 40px;
        flex: 0 0 40px;
        // border-radius: 6px;
        padding-left: 20px;
        .icon {
            width: 22px;
            height: 22px;
            vertical-align: middle;
            margin-top: -6px;
        }
    }
</style>