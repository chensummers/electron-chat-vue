<template>
    <div class="diagnoseArchivePage">
        <div>
            <div class="title">UserId</div>
            <div class="card-content">
                <div class="card-flex">
                    <div class="card-top">
                        <div class="card-top-name">王女士1</div>
                        <div class="card-top-name">本人</div>
                        <div class="card-top-attest">实名认证</div>
                    </div>
                    <div class="card-mid">
                        <div class="card-mid-name">性别：女</div>
                        <div class="card-mid-name">年龄：40</div>
                        <div class="card-mid-name">手机：1888886666</div>
                    </div>
                    <div class="card-view" @click="openModal('patientDetailVisible')">查看详情</div>
                </div>
                <div class="card-flex">2</div>
                <div class="card-flex">3</div>
                <div class="card-add">
                    <img class="add-patient" @click="openModal('addPatientVisible')" src="@/assets/login/add-patient.png" alt="">
                </div>
            </div>
        </div>
        <div>
            <div class="title">UserId</div>
            <div class="card-content">
                <div class="card-flex">
                    <div class="card-top">
                        <div class="card-top-name">王女士</div>
                        <div class="card-top-name">本人</div>
                        <div class="card-top-attest">实名认证</div>
                    </div>
                    <div class="card-mid">
                        <div class="card-mid-name">性别：女</div>
                        <div class="card-mid-name">年龄：40</div>
                        <div class="card-mid-name">手机：1888886666</div>
                    </div>
                    <div class="card-view"><a-button type="primary" @click="openModal('addArchiveVisible')"> 新建档案 </a-button></div>
                </div>
                <div class="card-flex">2</div>
                <div class="card-flex">3</div>
            </div>
        </div>
        <div>
            <div class="title">UserId</div>
            <div class="card-content">
                <div class="card-flex">
                    <div class="card-top">
                        <div class="card-top-name">王女士</div>
                        <div class="card-top-name">本人</div>
                        <div class="card-top-attest">实名认证</div>
                    </div>
                    <div class="card-mid">
                        <div class="card-mid-name">性别：女</div>
                        <div class="card-mid-name">年龄：40</div>
                        <div class="card-mid-name">手机：1888886666</div>
                    </div>
                    <div class="card-view" @click="openModal('addArchiveVisible')">查看详情</div>
                </div>
                <div class="card-flex">2</div>
                <div class="card-flex">3</div>
            </div>
        </div>

        <!--添加就诊人 弹框 -->
        <div class="my-modal" v-show="addPatientVisible">
            <div class="modal-content">
                <div class="modal-title"><span>添加就诊人</span><a-icon class="close-icon" @click="closeModal('addPatientVisible')" type="close" /></div>
                <div class="modal-main-content">
                    <div class="modal-main-content-title">请输入就诊人信息</div>
                    <!-- <a-form :form="addPatientForm" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="addPatientSubmit">
                        <a-form-item label="姓名">
                            <a-input
                                v-decorator="['name', { rules: [{ required: true, message: '请输入姓名!' }] }]"
                            />
                        </a-form-item>
                        <a-form-item label="身份证">
                            <a-input
                                v-decorator="['idCard', { rules: [{ message: '请输入身份证!' }] }]"
                            />
                        </a-form-item>
                        <a-form-item label="性别">
                            <a-select
                                v-decorator="[
                                'sex',
                                { rules: [{ required: true, message: '请选择性别!' }] },
                                ]"
                                placeholder="请选择性别"
                            >
                                <a-select-option value="male">男</a-select-option>
                                <a-select-option value="female"> 女</a-select-option>
                            </a-select>
                        </a-form-item>
                        <a-form-item label="生日">
                            <a-date-picker v-decorator="['birthday', config]" />
                        </a-form-item>
                        <a-form-item label="与本人关系">
                            <a-select
                                v-decorator="[
                                    'relative',
                                    { rules: [{ required: true, message: '请选择与本人关系' }] },
                                ]"
                                placeholder="请选择"
                            >
                                <a-select-option value="1">本人</a-select-option>
                                <a-select-option value="2">亲属</a-select-option>
                                <a-select-option value="3">朋友</a-select-option>
                                <a-select-option value="4">其他</a-select-option>
                            </a-select>
                        </a-form-item>
                        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                            <a-button  @click="closeModal('addPatientVisible')" class="cancel-btn">取消</a-button>
                            <a-button type="primary" html-type="submit">提交</a-button>
                        </a-form-item>
                    </a-form> -->
                    <a-form-model ref="addPatientForm" :rules='addPatientRule' :model="addPatientForm" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" >
                        <a-form-model-item label="姓名" prop="name">
                            <a-input v-model='addPatientForm.name' />
                        </a-form-model-item>
                        <a-form-model-item label="身份证" prop="idCard">
                            <a-input-number v-model='addPatientForm.idCard' />
                        </a-form-model-item>
                        <a-form-model-item label="性别" prop="sex">
                            <a-select
                                v-model="addPatientForm.sex"
                                placeholder="请选择性别"
                            >
                                <a-select-option value="male">男</a-select-option>
                                <a-select-option value="female"> 女</a-select-option>
                            </a-select>
                        </a-form-model-item>
                        <a-form-model-item label="出生日期" prop="birthday">
                            <a-date-picker v-model='addPatientForm.birthday' />
                        </a-form-model-item>
                        <a-form-model-item label="与本人关系" prop="relative">
                            <a-select
                                v-model="addPatientForm.relative"
                                placeholder="请选择">
                                <a-select-option value="1">本人</a-select-option>
                                <a-select-option value="2">亲属</a-select-option>
                                <a-select-option value="3">朋友</a-select-option>
                                <a-select-option value="4">其他</a-select-option>
                            </a-select>
                        </a-form-model-item>
                        <a-form-model-item :wrapper-col="{ span: 12, offset: 5 }">
                            <a-button  @click="closeModal('addPatientVisible')" class="cancel-btn">取消</a-button>
                            <a-button type="primary" @click="addPatientSubmit">保存并继续</a-button>
                        </a-form-model-item>
                    </a-form-model>
                </div>
            </div>
        </div>


        <!--新建问诊档案-就诊人信息 弹框 -->
        <div class="my-modal" v-show="addArchiveVisible">
            <div class="modal-content">
                <div class="modal-title"><span>新建问诊档案-就诊人信息</span><a-icon class="close-icon" @click="closeModal('addArchiveVisible')" type="close" /></div>
                <div class="modal-main-content">
                    <div class="modal-main-content-title">基本信息</div>
                    <a-form-model ref="addArchiveForm" :rules='addArchiveRule' :model="addArchiveForm" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" >
                        <a-form-model-item label="姓名" prop="name">
                            <a-input v-model='addArchiveForm.name' />
                        </a-form-model-item>
                        <a-form-model-item label="身份证" prop="idCard">
                            <a-input-number v-model='addArchiveForm.idCard' />
                        </a-form-model-item>
                        <a-form-model-item label="性别" prop="sex">
                            <a-select
                                v-model="addArchiveForm.sex"
                                placeholder="请选择性别"
                            >
                                <a-select-option value="male">男</a-select-option>
                                <a-select-option value="female"> 女</a-select-option>
                            </a-select>
                        </a-form-model-item>
                        <a-form-model-item label="出生日期" prop="birthday">
                            <a-date-picker v-model='addArchiveForm.birthday' />
                        </a-form-model-item>
                        <a-form-model-item label="与本人关系" prop="relative">
                            <a-select
                                v-model="addArchiveForm.relative"
                                placeholder="请选择">
                                <a-select-option value="1">本人</a-select-option>
                                <a-select-option value="2">亲属</a-select-option>
                                <a-select-option value="3">朋友</a-select-option>
                                <a-select-option value="4">其他</a-select-option>
                            </a-select>
                        </a-form-model-item>
                        <a-form-model-item label="身高(cm)" prop="height">
                            <a-input-number v-model="addArchiveForm.height"/>
                        </a-form-model-item>
                        <a-form-model-item label="体重(kg)" prop="weight">
                            <a-input-number v-model="addArchiveForm.weight" />
                        </a-form-model-item>
                        <a-form-model-item :wrapper-col="{ span: 12, offset: 5 }">
                            <a-button  @click="closeModal('addArchiveVisible')" class="cancel-btn">取消</a-button>
                            <a-button type="primary" @click="addArchiveSubmit">保存并继续</a-button>
                        </a-form-model-item>
                    </a-form-model>
                </div>
            </div>
        </div>

        <!-- 新建问诊人档案 - 婴儿生育信息 -->
        <div class="my-modal" v-show="addArchiveBabyVisible">
            <div class="modal-content">
                <div class="modal-title"><span>新建问诊档案-婴儿生育信息</span><a-icon class="close-icon" @click="closeModal('addArchiveBabyVisible')" type="close" /></div>
                <div class="modal-main-content">
                    <a-form-model ref="addArchiveBabyForm" :rules='addArchiveBabyRule' :model="addArchiveBabyForm" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" >
                        <a-form-model-item label="是否足月" prop="isMonth">
                            <a-radio-group v-model="addArchiveBabyForm.isMonth">
                                <a-radio value="1">已足月</a-radio>
                                <a-radio value="2">未足月</a-radio>
                            </a-radio-group>
                        </a-form-model-item>
                        <a-form-model-item label="出生情况" prop="birthdayStatus">
                            <a-checkbox-group v-model="addArchiveBabyForm.birthdayStatus">
                                <a-checkbox value="1" name="birthdayStatus">正常</a-checkbox>
                                <a-checkbox value="2" name="birthdayStatus">青紫</a-checkbox>
                                <a-checkbox value="3" name="birthdayStatus">窒息</a-checkbox>
                                <a-checkbox value="4" name="birthdayStatus">抢救</a-checkbox>
                            </a-checkbox-group>
                        </a-form-model-item>
                        <a-form-model-item label="体重(kg)" prop="weight">
                            <a-input-number v-model="addArchiveBabyForm.birthdayWeight" />
                        </a-form-model-item>
                        <a-form-model-item label="身高(cm)" prop="height">
                            <a-input-number v-model="addArchiveBabyForm.birthdayHeight"/>
                        </a-form-model-item>
                        <a-form-model-item label="母亲健康状况" prop="momHealth">
                            <a-input v-model="addArchiveBabyForm.momHealth"/>
                        </a-form-model-item>
                        <a-form-model-item :wrapper-col="{ span: 12, offset: 5 }">
                            <a-button  @click="closeModal('addArchiveBabyVisible')" class="cancel-btn">取消</a-button>
                            <a-button type="primary" @click="addArchiveBabySubmit">保存并继续</a-button>
                        </a-form-model-item>
                    </a-form-model>
                </div>
            </div>
        </div>

        <!-- 新建问诊人档案 - 健康史1 -->
        <div class="my-modal" v-show="addArchiveHealth1Visible">
            <div class="modal-content">
                <div class="modal-title"><span>新建问诊档案-健康史1</span><a-icon class="close-icon" @click="closeModal('addArchiveHealth1Visible')" type="close" /></div>
                <div class="modal-main-content">
                    <div>
                        <span class="m-r-10">是否有既往史</span>
                        <!-- <a-radio-group v-model="archiveHealthOne.isHistory" >
                            <a-radio value="1">是</a-radio>
                            <a-radio value="2">否</a-radio>
                        </a-radio-group> -->
                        <a-input class="m-r-10" style="width:200px;" placeholder="请输入疾病名称" />
                        <a-button type="primary">添加</a-button>
                    </div>
                    <a-collapse class="m-t-10" >
                        <a-collapse-panel key="1" header="疾病1">
                            <a-icon slot="extra" type="delete" @click="delIllness" />
                            <div>
                                <a-row>
                                    <a-col :span="4">
                                        <div class="label-align">病程:  </div>
                                    </a-col>
                                    <a-col :span="6"  class="m-r-10">
                                        <a-input placeholder="请输入数据" />
                                    </a-col>
                                    <a-col :span="6">
                                        <a-select  style="width: 120px" placeholder='请选择'>
                                            <a-select-option value="jack">
                                                天
                                            </a-select-option>
                                            <a-select-option value="lucy">
                                                周
                                            </a-select-option>
                                            <a-select-option value="disabled">
                                                月
                                            </a-select-option>
                                            <a-select-option value="Yiminghe">
                                                年
                                            </a-select-option>
                                        </a-select>
                                    </a-col>
                                </a-row>
                            </div>
                            <a-row class="m-t-10">
                                <a-col :span="4">
                                    <div class="label-align">诊断依据:</div>
                                </a-col>
                                <a-col :span="18">
                                    <a-input placeholder="请输入" />
                                </a-col>
                            </a-row>
                            <a-row class="m-t-10">
                                <a-col :span="4">
                                    <div class="label-align">用药情况:</div>
                                </a-col>
                                <a-col :span="18">
                                    <a-input placeholder="请输入" />
                                </a-col>
                            </a-row>
                            <a-row class="m-t-10">
                                <a-col :span="4">
                                    <div class="label-align">症状:</div>
                                </a-col>
                                <a-col :span="18">
                                    <a-input placeholder="请输入" />
                                </a-col>
                            </a-row>
                            <a-row class="m-t-10">
                                <a-col :span="4">
                                    <div class="label-align">异常情况:</div>
                                </a-col>
                                <a-col :span="18">
                                    <a-input placeholder="请输入" />
                                </a-col>
                            </a-row>
                        </a-collapse-panel>
                        <a-collapse-panel key="2" header="疾病2">
                            <p>2</p>
                        </a-collapse-panel>
                    </a-collapse>
                </div>
            </div>
        </div>

        <!-- 查看就诊人详情 弹框 -->
        <div class="my-modal" v-show="patientDetailVisible">
            <div class="modal-content">
                <div class="modal-title"><span>新建问诊档案-就诊人信息</span><a-icon class="close-icon" @click="closeModal('patientDetailVisible')" type="close" /></div>
                <div class="modal-main-content">
                    1111
                </div>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    data() {
        let validatePoint = (rule,value,callback) => {
           var reg = /^([0-9]{1,}\.\d{1})$/;
            if(value){
                if (!reg.test(value)) {
                    callback(new Error('请精确到小数点后一位'));
                }
            }else{
                callback();
            }
        }
        return {
            addPatientVisible: false, //新增就诊人弹框
            addArchiveVisible: false, // 新建就诊人档案弹框
            addArchiveBabyVisible: false, // 新建就诊人档案-婴儿生育信息 弹框
            addArchiveHealth1Visible: true, // 新建就诊人档案-婴儿生育信息 弹框
            patientDetailVisible: false, //就诊人详情弹框
            confirmLoading: false,
            addPatientForm: { // 就诊人信息form
                name:'', //姓名
                idCard:'', //身份证
                sex:'', //性别
                birthday:'', //生日
                relative:'', //与本人关系
            },
            addPatientRule: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ],
                idCard: [
                    { required: true, message: '请输入身份证', trigger: 'blur' },
                ],
                sex: [
                    { required: true, message: '请选择性别', trigger: 'change' },
                ],
                birthday: [
                    { required: true, message: '请选择出生日期', trigger: 'change' },
                ],
                relative: [
                    { required: true, message: '请选择与本人关系', trigger: 'change' },
                ],
            },
            addArchiveForm: { // 问诊档案form
                name:'' , //姓名
                idCard:'' , //身份证
                sex:'' , //性别
                birthday:'' , // 生日
                relative:'' , // 与本人关系
                height:'' , // 身高
                weight:'' , // 体重
            },
            addArchiveRule: { // 问诊档案rule
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ],
                idCard: [
                    { required: true, message: '请输入身份证', trigger: 'blur' },
                ],
                sex: [
                    { required: true, message: '请选择性别', trigger: 'change' },
                ],
                birthday: [
                    { required: true, message: '请选择出生日期', trigger: 'change' },
                ],
                relative: [
                    { required: true, message: '请选择与本人关系', trigger: 'change' },
                ],
                height: [
                   { required: false, validator: validatePoint, trigger: 'blur' }
                ],
                weight: [
                    { required: false, validator: validatePoint, trigger: 'blur' }
                ]
            },
            addArchiveBabyForm: { // 问诊档案-婴儿信息
                isMonth: '', // 是否足月
                birthdayStatus: '', // 出生情况
                birthdayWeight: '', // 出生体重
                birthdayHeight: '', // 出生体长
                momHealth: '', // 母亲健康状况
            },
            addArchiveBabyRule: {
                birthdayHeight: [
                   { required: false, validator: validatePoint, trigger: 'blur' }
                ],
                birthdayWeight: [
                    { required: false, validator: validatePoint, trigger: 'blur' }
                ]
            },
            archiveHealthOne:{
                isHistory: '2', //是否有既往史
                illnessList: [],//疾病列表
                isBloodPressure: '', //血压是否异常
                bloodPressureList: [], //血压测量表
                isBloodSugar:'' , // 血糖是否异常
                bloodSugarList: [], //血糖列表
                isBloodFat: '', //血脂是否异常
                bloodFatList: [] // 血糖列表
            },
            
        }
    },
    methods: {
        openModal(flag){
            this.$data[flag] = true;
            switch(flag) {
                case 'patientDetailVisible':
                    // this.form.resetFields();
                    break;
                case 'addPatientVisible':
                    this.$refs.addPatientForm.resetFields();
                    break;
                case 'addArchiveVisible':
                    this.$refs.addArchiveForm.resetFields();
                    break;
                default: break;

            }
        },
        handleOk(flag){
            this.confirmLoading = true;
            setTimeout(() => {
                this.$data[flag] = false;
                this.confirmLoading = false;
            }, 1000);
        },
        closeModal(flag) {
            this.$data[flag] = false;
        },
        addPatientSubmit(){ //添加就诊人提交
            console.log(123123);
            this.$refs.addPatientForm.validate(valid => {
                if (valid) {
                    console.log('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        addArchiveSubmit(){ //添加就诊人档案
            console.log(1);
            this.$refs.addArchiveForm.validate(valid => {
                if (valid) {
                    console.log('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        addArchiveBabySubmit(){ //添加就诊人档案
            console.log(1);
            this.$refs.addArchiveBabyForm.validate(valid => {
                if (valid) {
                    console.log('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        delIllness(){
            console.log(1111);
        },
        isHistory(e){
            console.log(e,"123");
        }
       
    }
}
</script>
<style lang="scss" scoped>
    .diagnoseArchivePage{
        box-sizing: border-box;
        position: relative;
        top: -10px;
        padding-bottom: 120px;
        .title{
            margin-bottom: 12px;
            margin-top: 22px;
            font-size: 20px;
            font-weight: 500;
            color: #202020;
        }
        .card-content{
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            .card-add{
                width: 380px;
                height: 130px;
                text-align: center;
                .add-patient{
                    width: 180px;
                    height: 40px;
                    vertical-align: middle;
                    margin-top: 45px;
                    cursor: pointer;
                }
            }
            .card-flex{
                width: calc(50% - 5px);
                height: 130px;
                background: #FFFFFF;
                box-shadow: 0px 0px 20px 0px #F2F8FD;
                border-radius: 6px;
                border: 1px solid #F6F6F6;
                padding: 20px 18px;
                .card-top{
                    display: flex;
                    align-items: center;
                    margin-bottom: 8px;
                    .card-top-name{
                        font-size: 18px;
                        font-weight: 500;
                        color: #202020;
                        margin-right: 12px;
                    }
                    .card-top-attest{
                        width: 66px;
                        text-align: center;
                        height: 20px;
                        line-height: 20px;
                        background: #F1F6FE;
                        border-radius: 2px;
                        font-size: 12px;
                        font-weight: 500;
                        color: #2173F9;
                    }
                }
                .card-mid{
                    display: flex;
                    align-items: center;
                    margin-bottom: 16px;
                    .card-mid-name{
                        font-size: 14px;
                        font-weight: 400;
                        color: #606060;
                        margin-right: 30px;
                    }
                }
                .card-view{
                    text-align: center;
                    font-size: 14px;
                    color: #909090;
                    cursor: pointer;
                }
            }
        }
        .m-t-10{
            margin-top: 10px;
        }
        .m-r-10{
            margin-right: 10px;
        }

        .my-modal{
            position: fixed;
            top: 140px;
            bottom: 0;
            left: 1040px;
            right: 0;
            background: rgba($color: #000000, $alpha: .37);
            .modal-content{
                width: 80%;
                height: 700px;
                position: relative;
                top: 50px;
                background: #FFFFFF;
                margin: 0 auto;
                border-radius: 10px;
                overflow: hidden;
                .modal-title{
                    height: 60px;
                    line-height: 60px;
                    padding-left: 20px;
                    font-size: 20px;
                    font-weight: bold;
                    border-bottom: 1px solid #cccccc;
                    .close-icon{
                        float: right;
                        margin: 20px 20px 0 0;
                    }
                }
                .modal-main-content{
                    height: 640px;
                    padding: 20px;
                    overflow: auto;
                    .modal-main-content-title{
                        text-align: center;
                        height: 40px;
                        line-height: 40px;
                        font-size: 18px;
                    }
                    .cancel-btn{
                        margin-right: 20px;
                    }
                    .label-align{
                        text-align: right;
                        padding-right: 10px;
                        line-height: 35px;
                    }
                }
            }
        }
    }
</style>
