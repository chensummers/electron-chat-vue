<template>
    <div class="orderInfoPage">
        <!-- 商品 -->
        <div v-if="showGood">
            <div class="tab-content">
                <div class="tab-list">
                    <div class="tab-desc" v-for="(item,index) in tabList" :key='index' @click="changeTab(index,'goodIndex')" :class="{'tab-active': goodIndex == index}">{{item.name}}</div>
                </div>
                <div class="tab-btns">
                    <div class="tab-btn" :class="{'tab-btn-active': showGood}" @click="showGood = true">商品</div>
                    <div class="tab-btn" :class="{'tab-btn-active': !showGood}" @click="showGood = false">服务</div>
                </div>
            </div>
            <div class="good-content">
                <div class="good-content-item">
                    <div class="good-title">
                        <div class="good-name">康爱多大药房</div>
                        <div class="good-order-status">待收货</div>
                    </div>
                    <div class="order-wuliu">
                        <img src="@/assets/login/car.png" alt="">
                        <div class="wuliu-info">您的快件代签收（快递柜），如有疑请拨您的快件代签收（快递柜），如有疑请拨</div>
                        <img src="@/assets/login/right.png" alt="">
                    </div>
                    <div class="good-detail">
                        <div class="good-img"></div>
                        <div class="good-detail-name">麦特美  盐酸二甲双三缓释片0.25g*72片缓释片0.25g*72片</div>
                    </div>
                    <div class="good-price">
                        <span>共1件</span>
                        <span class="good-price-number">￥218.00</span>
                    </div>
                </div>
                <div class="good-content-item">
                    <div class="good-title">
                        <div class="good-name">康爱多大药房</div>
                        <div class="good-order-status">待收货</div>
                    </div>
                    <div class="order-wuliu">
                        <img src="@/assets/login/car.png" alt="">
                        <div class="wuliu-info">您的快件代签收（快递柜），如有疑请拨您的快件代签收（快递柜），如有疑请拨</div>
                        <img src="@/assets/login/right.png" alt="">
                    </div>
                    <div class="good-detail">
                        <div class="good-img"></div>
                        <div class="good-detail-name">麦特美  盐酸二甲双三缓释片0.25g*72片缓释片0.25g*72片</div>
                    </div>
                    <div class="good-price">
                        <span>共1件</span>
                        <span class="good-price-number">￥218.00</span>
                    </div>
                </div>
                <div class="good-content-item">
                    <div class="good-title">
                        <div class="good-name">康爱多大药房</div>
                        <div class="good-order-status">待收货</div>
                    </div>
                    <div class="order-wuliu">
                        <img src="@/assets/login/car.png" alt="">
                        <div class="wuliu-info">您的快件代签收（快递柜），如有疑请拨您的快件代签收（快递柜），如有疑请拨</div>
                        <img src="@/assets/login/right.png" alt="">
                    </div>
                    <div class="good-detail">
                        <div class="good-img"></div>
                        <div class="good-detail-name">麦特美  盐酸二甲双三缓释片0.25g*72片缓释片0.25g*72片</div>
                    </div>
                    <div class="good-price">
                        <span>共1件</span>
                        <span class="good-price-number">￥218.00</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 服务 -->
        <div v-else>
            <div class="tab-content">
                <div class="tab-list">
                    <div class="tab-desc" v-for="(item,index) in tabServeList" :key='index' @click="changeTab(index,'serverIndex')" :class="{'tab-active': serverIndex == index}">{{item.name}}</div>
                </div>
                <div class="tab-btns">
                    <div class="tab-btn" :class="{'tab-btn-active': showGood}" @click="showGood = true">商品</div>
                    <div class="tab-btn" :class="{'tab-btn-active': !showGood}" @click="showGood = false">服务</div>
                </div>
            </div>
            <div class="good-content">
                <div class="good-content-item good-content-item-height">
                    <div class="good-title">
                        <div class="good-name">康爱多大药房</div>
                        <div class="good-order-status"><span class="price-desc">支付价格</span><span>￥218</span></div>
                    </div>
                    <div class="server-person">
                        <span>周春阳</span>
                        <span class="server-tag">主治医师</span>
                    </div>
                    <div class="server-person" style="margin-top:14px;">就诊人：袁照洋</div>
                    <div class="server-desc">有效期：2021.06.09-2022.06.09</div>
                    <div class="server-desc">订单编号：129374663826274</div>
                    <div class="server-desc">支付方式：微信支付</div>
                    <div class="server-desc">下单时间：2021-09-12   18：32：19</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            showGood: true,
            goodIndex: 0,
            serverIndex: 0,
            tabList: [
                {name:'全部'},
                {name:'待付款'},
                {name:'待发货'},
                {name:'待收货'},
                {name:'待评价'},
            ],
            tabServeList: [
                {name:'全部'},
                {name:'待付款'},
                {name:'待发货'},
            ]
        }
    },
    methods: {
        changeTab(index,flag){
            this.$data[flag] = index;
        }
    }
}
</script>
<style lang="scss" scoped>
    .orderInfoPage{
        .tab-content{
            display: flex;
            justify-content: space-between;
            .tab-list{
                display: flex;
                .tab-desc{
                    width: 110px;
                    text-align: center;
                    font-size: 18px;
                    color: #909090;
                    cursor: pointer;
                }
                .tab-active{
                    color: #2173F9;
                    font-weight: bold;
                }
            }
            .tab-btns{
                display: flex;
                .tab-btn{
                    width: 52px;
                    height: 32px;
                    line-height: 32px;
                    text-align: center;
                    background: #F6F6F6;
                    font-size: 14px;
                    color: #909090;
                    cursor: pointer;
                }
                .tab-btn-active{
                    background: #FFFFFF;
                    box-shadow: 0px 5px 10px 0px rgba(213, 213, 213, 0.22);
                    border-radius: 2px;
                    border: 1px solid #606060;
                }
            }
        }
        .good-content{
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            .good-content-item-height{
                height: 250px !important;
            }
            .good-content-item{
                width: 400px;
                height: 220px;
                background: #F6F6F6;
                border-radius: 6px;
                box-sizing: border-box;
                padding: 14px;
                .good-title{
                    display: flex;
                    justify-content: space-between;
                    .good-name{
                        font-size: 18px;
                        font-weight: 500;
                        color: #202020;
                    } 
                    .good-order-status{
                        font-size: 16px;
                        color: #FF6232;
                        .price-desc{
                            color: #303030;
                            font-size: 13px;
                            margin-right: 5px;
                        }
                    }
                }
                .order-wuliu{
                    display: flex;
                    align-items: center;
                    margin: 14px 0;
                    height: 32px;
                    background: #F0F0F0;
                    border-radius: 6px;
                    padding: 0 10px;
                    .wuliu-info{
                        margin: 0 10px;
                        width: 330px;
                        display: inline-block;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
                .good-detail{
                    display: flex;
                    .good-img{
                        margin-right: 10px;
                        width: 80px;
                        height: 80px;
                        background: #F0F0F0;
                        border-radius: 8px;
                    }
                    .good-detail-name{
                        flex: 1;
                    }
                }
                .good-price{
                    color: #303030;
                    font-size: 13px;
                    text-align: right;
                    .good-price-number{
                        color: #F9562B;
                        font-size: 18px;
                        margin-left: 5px;
                        font-weight: bold;
                    }
                }
                .server-person{
                    margin-top: 18px;
                    font-size: 16px;
                    font-weight: 500;
                    color: #202020;
                    .server-tag{
                        display: inline-block;
                        width: 60px;
                        text-align: center;
                        font-size: 12px;
                        color: #2173F9;
                        height: 21px;
                        background: #E8EDF5;
                        border-radius: 2px;
                        margin-left: 8px;
                    }
                }
                .server-desc{
                    font-size: 16px;
                    color: #B9B9B9;
                    margin-top: 6px;
                }
            }
        }
    }
</style>
