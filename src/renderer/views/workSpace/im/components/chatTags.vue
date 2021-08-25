<template>
    <div class="chat-tags">
        <span class="tag">
            <icon-svg icon-class="icon-online-medicine" class="icon"></icon-svg>
            <label>线上开药</label>
        </span>
        <span class="tag">
            <icon-svg icon-class="icon-product" class="icon"></icon-svg>
            <label>推商品</label>
        </span>
        <zhuanzhen-button id="123" className="tag">
            <icon-svg icon-class="icon-zhuanzhen" class="icon"></icon-svg>
            <label>转诊</label>
        </zhuanzhen-button>
    </div>
</template>
<script>
import ZhuanzhenButton from './zhuanzhenButton.vue';
export default {
    components:{
        ZhuanzhenButton
    },
    data() {
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .chat-tags {
        // position: absolute;
        // bottom: 0;
        // width:100%;
        padding:4px;
        .tag {
            display: inline-block;
            font-size: 12px;
            height: 26px;
            line-height: 26px;
            border-radius: 26px;
            border: 1px solid #F2F2F2;
            color: #909090;
            // width: 90px;
            padding: 0 10px;
            text-align: center;
            cursor: pointer;
            .icon {
                width:12px;
                height: 12px;
            }
            label{
                font-size: 12px;
            }
            &+.tag {
                margin-left: 4px;
            }
        }
    }
</style>