<template>
    <div class="recommendGoodPage">
        <div class="good-list">
            <div class="good-img"></div>
            <div class="good-desc">
                <div class="good-name">麦特美  盐酸二甲双三缓释片0.25g*72片</div>
                <div class="send-btn">发送</div>
            </div>
        </div>
        <div class="good-list">
            <div class="good-img"></div>
            <div class="good-desc">
                <div class="good-name">麦特美  盐酸二甲双三缓释片0.25g*72片</div>
                <div class="send-btn">发送</div>
            </div>
        </div>
        <div class="good-list">
            <div class="good-img"></div>
            <div class="good-desc">
                <div class="good-name">麦特美  盐酸二甲双三缓释片0.25g*72片</div>
                <div class="send-btn">发送</div>
            </div>
        </div>
        <div class="good-list">
            <div class="good-img"></div>
            <div class="good-desc">
                <div class="good-name">麦特美  盐酸二甲双三缓释片0.25g*72片</div>
                <div class="send-btn">发送</div>
            </div>
        </div>
        <div class="good-list">
            <div class="good-img"></div>
            <div class="good-desc">
                <div class="good-name">麦特美  盐酸二甲双三缓释片0.25g*72片</div>
                <div class="send-btn">发送</div>
            </div>
        </div>
        <div class="good-list">
            <div class="good-img"></div>
            <div class="good-desc">
                <div class="good-name">麦特美  盐酸二甲双三缓释片0.25g*72片</div>
                <div class="send-btn">发送</div>
            </div>
        </div>
        <div class="good-list">
            <div class="good-img"></div>
            <div class="good-desc">
                <div class="good-name">麦特美  盐酸二甲双三缓释片0.25g*72片</div>
                <div class="send-btn">发送</div>
            </div>
        </div>
        <div class="good-list">
            <div class="good-img"></div>
            <div class="good-desc">
                <div class="good-name">麦特美  盐酸二甲双三缓释片0.25g*72片</div>
                <div class="send-btn">发送</div>
            </div>
        </div>
        <div class="good-list">
            <div class="good-img"></div>
            <div class="good-desc">
                <div class="good-name">麦特美  盐酸二甲双三缓释片0.25g*72片</div>
                <div class="send-btn">发送</div>
            </div>
        </div>
        <div class="good-list">
            <div class="good-img"></div>
            <div class="good-desc">
                <div class="good-name">麦特美  盐酸二甲双三缓释片0.25g*72片</div>
                <div class="send-btn">发送</div>
            </div>
        </div>
        <div class="good-list">
            <div class="good-img"></div>
            <div class="good-desc">
                <div class="good-name">麦特美  盐酸二甲双三缓释片0.25g*72片</div>
                <div class="send-btn">发送</div>
            </div>
        </div>
        <div class="good-list">
            <div class="good-img"></div>
            <div class="good-desc">
                <div class="good-name">麦特美  盐酸二甲双三缓释片0.25g*72片</div>
                <div class="send-btn">发送</div>
            </div>
        </div>
        <div class="good-list">
            <div class="good-img"></div>
            <div class="good-desc">
                <div class="good-name">麦特美  盐酸二甲双三缓释片0.25g*72片</div>
                <div class="send-btn">发送</div>
            </div>
        </div>
       
    </div>
</template>
<script>
export default {
    name: 'quickService',
    data(){
        return {
            index: 0
        }
    },
    methods: {

    },
   
}
</script>
<style lang="scss" scoped>
    .recommendGoodPage{
        overflow: auto;
        padding-bottom: 130px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        .good-list{
            width: calc(50% - 5px);
            height: 120px;
            background: #F6F6F6;
            border-radius: 6px;
            display: flex;
            padding: 20px 14px;
            box-sizing: border-box;
            .good-img{
                width: 80px;
                height: 80px;
                margin-right: 10px;
            }
            .good-desc{
                position: relative;
                font-size: 14px;
                color: #474747;
                height: 80px;
                flex: 1;
                .good-name{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .send-btn{
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 65px;
                    height: 30px;
                    text-align: center;
                    font-size: 14px;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 30px;
                    background: #2173F9;
                    border-radius: 2px;
                }
            }
        }
    }
</style>
