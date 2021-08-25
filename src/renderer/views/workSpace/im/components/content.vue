<template>
    <div class="content">
        <tip :tip="tip"></tip>
        <div class="chat-wrap-con">
            <user-card :userInfo="userInfo"></user-card>
            <div class="chat-item" v-for="(content,index) in chatList" :key="index">
                <chat-text-wrap  :content="content"></chat-text-wrap>
            </div>
        </div>
        <chat-tags></chat-tags>
    </div>
</template>
<script>
import Tip from './tip';
import ChatTags from './chatTags';
import ChatTextWrap from './chatTextWrap.vue';
import UserCard from './userCard.vue';
export default {
    components: {
        ChatTags,
        Tip,
        ChatTextWrap,
        UserCard
    },
    data() {
        return {
            tip:'肚子不舒服',
            userInfo:{
                sex:1,
                name:'张三',
                isFirst:1,
                consult:'肚子不舒服',
                age: 20,
            },
            chatList:[
                {
                    left: true,
                    img:'',
                    txt:'left left left left left left left left left left left left left left left left left left left left left left left left dddddd'
                },
                {
                    img:'',
                    txt:'r'
                },
                {
                    img:'',
                    txt:'left left left',
                    type:1,
                    productName:'商品名称'
                },
                {
                    img:'',
                    txt:'left left left',
                    type:2,
                },
                {
                    img:'',
                    txt:'left left left',
                    type:3,
                },
                {
                    img:'',
                    txt:'right right right'
                },
                {
                    left: true,
                    img:'',
                    txt:'left left left'
                },
                {
                    img:'',
                    txt:'right right right'
                },
                {
                    left: true,
                    img:'',
                    txt:'left left left'
                },
                {
                    img:'',
                    txt:'right right right'
                },
                {
                    left: true,
                    img:'',
                    txt:'left left left'
                },
                {
                    img:'',
                    txt:'right right right'
                },
                {
                    left: true,
                    img:'',
                    txt:'left left left'
                },
                {
                    img:'',
                    txt:'right right right'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .content {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 300px;
        overflow: auto;
        flex: 1;
        display: flex;
        flex-direction: column;
        // padding: 0 20px 10px 20px;
        .chat-wrap-con {
            flex:1;
            // overflow: auto;
            padding:0 10px;
            overflow-y: auto;
            overflow-x: hidden;
            .chat-item {
                margin: 20px 0;
            }
        }
    }
</style>