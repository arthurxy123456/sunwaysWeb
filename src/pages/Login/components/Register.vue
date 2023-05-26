<template>
  <div>
    <!-- 注册模块 -->
    <div class="register" v-show="showRegister">
      <div class="title">
        <div style="font-size: 24px; font-weight: 500">注册</div>
        <div @click="backLogin" class="backLogin">
          <img src="@/assets/register/返回.png" />
          返回登陆
        </div>
      </div>
      <el-form label-position="top">
        <el-form-item label="*用户名" prop="name">
          <el-input placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="*邮箱">
          <el-input placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="*验证码">
          <el-input class="code" placeholder="请输入验证码">
            <span slot="suffix" @click="getCode"> 获取验证码 </span>
          </el-input>
        </el-form-item>
        <el-form-item label="*密码">
          <el-input
            suffix-icon="el-icon-view"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="*密码确认">
          <el-input
            suffix-icon="el-icon-view"
            placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>
        <el-checkbox>
          <div>
            我已阅读并同意<span style="color: #ed6d00">《隐私政策》</span
            >和<span style="color: #ed6d00">《使用条款》</span>
          </div>
        </el-checkbox>
        <button class="registerBtn" @click="nextDeploy">业主注册</button>
      </el-form>
    </div>

    <!-- 新用户配置模块 -->
    <div class="deploy" v-show="!showRegister">
      <div class="title">
        <div style="font-size: 24px; font-weight: 500">注册</div>
        <div @click="backLogin" class="backLogin">
          <img src="@/assets/register/返回.png" />
          返回登陆
        </div>
      </div>
      <el-form label-position="top">
        <el-form-item label="*货币单位">
          <el-select placeholder="请选择" class="my-select">
            <el-option label="餐厅名" value="1"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="*收益设置">
          <el-input>
            <template slot="suffix">CNY/kWh</template>
          </el-input>
        </el-form-item>
        <el-form-item label="*时间格式">
          <el-select placeholder="请选择时间格式" class="my-select">
            <el-option label="餐厅名" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否接收告警邮件">
          <el-switch></el-switch>
        </el-form-item>
        <div class="deployBtn">
          <button class="jump" @click="goback">跳过</button>
          <button @click="confirm">确认</button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showRegister: true,
    };
  },
  components: {},
  methods: {
    // 控制显示隐藏新用户配置
    nextDeploy() {
      this.showRegister = !this.showRegister;
    },
    // 返回登录页
    backLogin() {
      this.$router.push({
        name: "login",
      });
      location.reload();
    },
    goback() {
      this.showRegister = !this.showRegister;
    },
    confirm() {
      alert("注册成功");
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
// 注册样式
.register {
  font-size: 14px;
  width: 440px;
  height: 642px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;

  .title {
    width: 360px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 15px;
      height: 11px;
    }
    .backLogin {
      cursor: pointer;
    }
  }

  ::v-deep .el-form-item {
    margin-bottom: 0px;
  }
  ::v-deep .el-form-item__label {
    margin-bottom: -50px;
  }
  ::v-deep .el-input__inner {
    width: 360px;
    height: 32px;
    border-radius: 16px;
  }
  ::v-deep .el-checkbox {
    margin-top: 20px;
  }
  ::v-deep .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #ed6d00;
    border-color: #ed6d00;
  }
  ::v-deep .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #666;
  }
  ::v-deep .el-input__icon {
    margin-top: 15px;
  }
  ::v-deep .code .el-input__inner {
    width: 250px;
    height: 32px;
  }

  ::v-deep .code .el-input__suffix-inner {
    display: flex;
    color: #ed6d00;
    margin-top: 25px;
    margin-right: -4px;
    cursor: pointer;
  }
  button {
    width: 360px;
    height: 32px;
    border-radius: 16px;
    margin-top: 40px;
    font-size: 14px;
  }
}

::v-deep .el-input__inner::placeholder {
  left: 15px;
  bottom: 7px;
}
// 新用户配置
.deploy {
  font-size: 14px;
  width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 360px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 15px;
      height: 11px;
    }
    .backLogin {
      cursor: pointer;
    }
  }
  .deployBtn {
    display: flex;
    margin-bottom: 40px;
    margin-top: -10px;
    justify-content: space-between;
    .jump {
      background-color: #ffffff;
      color: #333;
    }
  }
  ::v-deep .el-form-item {
    margin-bottom: 0px;
  }
  ::v-deep .el-form-item__label {
    margin-bottom: -50px;
  }
  ::v-deep .el-input__inner {
    width: 360px;
    height: 32px;
    border-radius: 16px;
  }
  ::v-deep .el-input__icon {
    margin-top: -11px;
  }
  button {
    width: 170px;
    height: 32px;
    border-radius: 16px;
  }
  ::v-deep .my-select .el-input__placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ::v-deep .el-switch__core {
    // margin-right: -200px;
    margin-top: -15px;
    left: 317px;
  }
  ::v-deep .el-input__suffix {
    top: 25px;
    color: #666666;
    font-size: 14px;
  }
  button {
    margin-top: 40px;
    font-size: 14px;
  }
}
</style>