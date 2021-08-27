<template>
  <div class="login">
    <div class="content">
      <div class="left">
        <img class="img" :src="leftImg" />
      </div>
      <div class="right">
        <h2>账号密码登录</h2>
        <a-form layout="horizontal" :form="form" @submit="handleSubmit">
          <a-form-item
            :validate-status="userNameError() ? 'error' : ''"
            :help="userNameError() || ''"
            class="account"
          >
            <a-input
              v-decorator="[
                'userName',
                { rules: [{ required: true, message: '您的账号错误!' }] }
              ]"
              placeholder="请输入您的账号"
            >
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item
            :validate-status="passwordError() ? 'error' : ''"
            :help="passwordError() || ''"
            class="password"
          >
            <a-input
              v-decorator="[
                'password',
                { rules: [{ required: true, message: '您的密码错误!' }] }
              ]"
              type="password"
              placeholder="请输入您的密码"
            >
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item
            class="code"
            :validate-status="codeError() ? 'error' : ''"
            :help="codeError() || ''"
          >
            <a-input
              v-decorator="[
                'code',
                { rules: [{ required: true, message: '验证码错误!' }] }
              ]"
              placeholder="请输入验证码"
              class="codeInput"
            ></a-input>
            <img class="codeImg" src />
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              class="submitBtn"
              :class="{ isEmpty: !hasErrors(form.getFieldsError()) }"
              :disabled="hasErrors(form.getFieldsError())"
              >登 陆</a-button
            >
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  data() {
    return {
      leftImg: require("@/assets/login/left-img.png"),
      hasErrors,
      form: this.$form.createForm(this, { name: "horizontal_login" })
    };
  },
  mounted() {
    let userId = localStorage.getItem('userId');
    if(!userId) {
      this.$router.push('/login')
    }else{
      this.$router.push('/chat')
    }
    
    this.$nextTick(() => {
      this.form.validateFields();
    });
  },
  methods: {
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
    },
    codeError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("code") && getFieldError("code");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const {userName,code,password} = values;
          if(userName !='admin') {
            this.$message.error('账号输入错误');
            return;
          }
          if(password !='123') {
            this.$message.error('密码输入错误');
            return;
          }
          if(code !='123') {
            this.$message.error('验证码输入错误');
            return;
          }
          
          this.$router.push('/chat')
          localStorage.setItem('userId',10000)
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 800px;
  // height: 563px;
  background: url("../../assets/login/login-bg.png");
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: relative;
  .content {
    width: 600px;
    height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    background: #ffffff;
    box-shadow: 0px 10px 15px 0px rgba(9, 61, 112, 0.08);
    border-radius: 6px;
    .left {
      width: 315px;
      height: 100%;
      .img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 110px;
      h2 {
        width: 175px;
        height: 41px;
        font-size: 29px;
        font-weight: 600;
        color: #2173f9;
        line-height: 41px;
        text-shadow: 0px 10px 15px rgba(9, 61, 112, 0.08);
        margin-bottom: 44px;
      }
      .account,
      .password {
        width: 300px;
      }
      /deep/ .ant-input {
        height: 41px;
        background: #f4f5f8;
        box-shadow: 0px 10px 15px 0px rgba(9, 61, 112, 0.08);
        border-radius: 5px;
      }
      .code {
        display: flex;
        flex-direction: row;
        .codeInput {
          width: 171px;
          height: 41px;
          background: #f4f5f8;
          box-shadow: 0px 10px 15px 0px rgba(9, 61, 112, 0.08);
          border-radius: 5px;
        }
        .codeImg {
          width: 113px;
          height: 40px;
          background: #f4f5f8;
          margin-left: 17px;
        }
      }

      .submitBtn {
        width: 169px;
        height: 43px;
        background: #dfdfdf;
        box-shadow: 0px 10px 15px 0px rgba(9, 61, 112, 0.08);
        border-radius: 22px;
        font-size: 15px;
        font-weight: 500;
        color: #ffffff;
        line-height: 43px;
        text-shadow: 0px 10px 15px rgba(9, 61, 112, 0.08);
        margin-top: 47px;
      }
      .isEmpty {
        background: #2173f9;
      }
    }
  }
}
</style>
