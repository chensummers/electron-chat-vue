<template>
    <span :class="['zhuanzhen-button', className]" @click="handleVisible">
        <slot></slot>
        <a-modal
            title="选择转诊对象"
            :visible="visible"
            :confirm-loading="confirmLoading"
            @ok="handleOk"
            :width="800"
            @cancel="handleCancel"
            dialogClass="zhuanzhen-modal"
        >
            <div class="modal-content">
                <div class="tags">
                    <span class="tag">外部转诊</span>
                    <!-- <span class="tag">内部转诊</span> -->
                </div>
                <div class="table">
                    <div class="item" v-for="(d,index) in doctorList" :key="d.id" @click="handleChooseItem(d,index)">
                        <icon-svg v-if="index==activeIndex" icon-class="icon-radio-checked" class="icon"></icon-svg>
                        <span v-if="index!=activeIndex" class="circle"></span>
                        <span class="name">{{d.name}}</span>
                        <span class="position">{{d.position}}</span>
                        <span>{{d.level}}</span>
                        <span>({{d.hospital}})</span>
                        <span class="patient" v-if="d.isb">患者已绑定</span>
                        <span class="babel" v-if="d.isd">医生</span>
                    </div>
                </div>
                <div class="text-area">
                    <div class="title">转诊说明&病情描述</div>
                    <a-textarea placeholder="请输入消息" allow-clear v-model="inputVal"/>
                </div>
            </div>
        </a-modal>
    </span>
</template>
<script>
export default {
    props:{
        id: String,
        className: String
    },
    data() {
        return {
            visible:false,
            confirmLoading: false,
            doctorList:[
                {id:1,name:'张三1',position:'肾科',level:'主治医生',hospital:'上海人民医院',isb:1,isd:1},
                {id:2,name:'张三2',position:'肾科',level:'主治医生',hospital:'上海人民医院',isb:1,isd:1},
                {id:3,name:'张三3',position:'肾科',level:'主治医生',hospital:'上海人民医院',isd:1},
                {id:4,name:'张三4',position:'肾科',level:'主治医生',hospital:'上海人民医院',isd:1},
                {id:5,name:'张三5',position:'肾科',level:'主治医生',hospital:'上海人民医院',isb:1,isd:1},
                {id:6,name:'张三6',position:'肾科',level:'主治医生',hospital:'上海人民医院',isd:1},
            ],
            activeIndex:0,
            inputVal:''
        }
    },
    methods:{
        handleVisible() {
            this.visible = true;
            console.log('/zhuanzhenButton.vue [27]--1','click');
        },
        handleOk() {
            this.visible = false;
        },
        handleCancel() {
            this.visible = false;
        },
        handleChooseItem(item,activeIndex) {
            console.log('/zhuanzhenButton.vue [70]--1',item);
            this.activeIndex = activeIndex;
        }
    }
}
</script>
<style lang="scss" scoped>
/deep/.zhuanzhen-modal {
    top:50%;
    transform: translateY(-50%);
    .ant-modal-header {
        // text-align: center;
        font-size: 20px;
        border-bottom: none;
    }
    .ant-modal-footer {
        border-top: none;
    }
    .modal-content {
        .tags {
            margin-bottom: 10px;
            .tag {
                display: inline-block;
                height: 42px;
                line-height: 42px;
                width: 130px;
                background-color: #F1F6FE;
                border-radius: 42px;
                color:#2173F9;
                font-size: 18px;
                text-align: center;
                &+.tag {
                    margin-left: 20px;
                }
            }
        }
        .table {
            max-height: 500px;
            min-height: 300px;
            overflow: auto;
            font-size: 18px;
            margin-bottom: 10px;
            .item {
                margin: 10px 0;
                display: flex;
                align-items: center;
                cursor:default;
                span{
                    margin-right: 10px;
                    display: inline-block;
                }
                .icon {
                    width: 20px;
                    height: 20px;
                    margin-right: 20px;
                }
                .circle {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border-radius: 20px;
                    border: 1px solid #CFD2D7;
                    margin-right: 20px;
                }
                .name {
                    font-weight: bold;
                }
                .position {
                    margin: 0 30px 0  20px;
                }
                
            }
        }
    }
}
.text-area {
    .title {
        color: #202020;
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 15px;
    }
    /deep/ textarea{
        resize: none;
        outline: none;
        height: 145px;
    }
}
</style>

