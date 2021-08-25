<template>
    <div class="bottom">
        <div class="top">
            <icon-svg icon-class="icon-upload-img" class="icon"></icon-svg>
            <span class="tag">
                <icon-svg icon-class="icon-consult" class="icon"></icon-svg>
                咨询小结
            </span>
        </div>
        <div class="text-area">
            <!-- @pressEnter="handleEnter" -->
            <a-textarea placeholder="请输入消息" allow-clear v-model="inputVal" :autoSize="false"/>
            <div class="action">
                <span class="btn">强制结束</span>
                <span class="btn send">发送</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputVal:''
        }
    },
    methods:{
        handleEnter(e) {
            console.log('/bottom.vue [23]--1',e.target.value);
        }
    }
}
</script>
<style lang="scss" scoped>
    .bottom {
        height: 230px;
        border-top: 1px solid #F2F2F2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top{
            display: flex;
            justify-content: space-between;
            padding: 4px 20px;
            align-items: center;
            .tag {
                font-size: 12px;
                display: inline-block;
                // line-height: 42px;
                padding: 4px 8px;
                border-radius: 42px;
                border: 1px solid #F2F2F2;
                color: #909090;
                // width: 126px;
                text-align: center;
                margin-left: 20px;
                cursor: pointer;
            }
            .icon {
                width: 12px;
                height: 12px;
                cursor: pointer;
            }
        }
        .text-area {
            display: flex;
            flex-direction: column;
            flex: 1;
            justify-content: space-between;
            .ant-input-affix-wrapper {
                flex: 1;
                /deep/ textarea.ant-input {
                    border:none;
                    height: 100% !important;
                    resize: none;
                    outline: none;
                    &:focus{
                        box-shadow: none;
                    }
                }
            }
            .action {
                flex: 0 0 20px;
                text-align: right;
                margin-bottom: 10px;
                font-size: 12px;
                .btn {
                    display: inline-block;
                    // line-height: 40px;
                    // padding: 0 20px;
                    padding: 4px 8px;
                    border-radius: 40px;
                    border: 1px solid #F2F2F2;
                    color: #909090;
                    margin-right: 20px;
                    cursor: pointer;
                    &.send{
                        border-color: #2173F9;
                        color: #2173F9;
                    }
                }
            }
        }
    }
</style>