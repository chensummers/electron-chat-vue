<template>
    <div class="chat">
        <chat-content></chat-content>
        <chat-bottom></chat-bottom>
    </div>
</template>
<script>

import ChatContent from './components/content';
import ChatBottom from './components/bottom';
export default {
    components:{
        ChatContent,
        ChatBottom
    },
    data() {
        return{
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .chat {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>