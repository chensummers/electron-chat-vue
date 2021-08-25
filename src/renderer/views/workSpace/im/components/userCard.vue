<template>
    <div class="user-card">
        <div class="content">
            <div class="name">{{userInfo.name}}</div>
            <div class="item">
                <span class="label">性别：</span>
                <span>{{userInfo.sex==1?'男':'女'}}</span>
            </div>
            <div class="item">
                <span class="label">年龄：</span>
                <span>{{userInfo.age}}岁</span>
            </div>
            <div class="item">
                <span class="label">是否首次询问：</span>
                <span class="first-anwser">{{userInfo.isFirst==1?'是':'否'}}</span>
            </div>
            <div class="item consult">
                <span class="label">主诉：</span>
                <span class="txt">{{userInfo.consult}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        userInfo:Object
    }
}
</script>
<style lang="scss" scoped>
.user-card {
    .content {
        padding:14px 20px;
        background-color: #F2F5F8;
        border-radius: 6px;
        margin: 20px auto;
        color:#202020;
        font-size: 14px;
        max-width: 60%;
        min-width: 360px;
        font-weight: bold;
        .name {
            font-size: 16px;
            margin-bottom: 10px;
        }
        .item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 4px;
            .label {
                color: #909090;
                font-weight: 400;
            }
            .first-anwser {
                color: #29D17F;
            }
            &.consult{
                justify-content: start;
            }
            &:last-child{
                margin-top: 20px;
            }
        }
    }
}
</style>


