<template>
  <div>
    <!-- 注册模块 -->
    <div class="forget" v-show="showForget">
      <div class="title">
        <div style="font-size: 24px; font-weight: 500">找回密码</div>
        <div @click="backLogin" class="backLogin">
          <img src="@/assets/register/返回.png" />
          返回登陆
        </div>
      </div>
      <el-form label-position="top">
        <el-form-item label="*邮箱">
          <el-input placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="*验证码">
          <el-input class="code" placeholder="请输入验证码">
            <span slot="suffix" @click="getCode"> 获取验证码 </span>
          </el-input>
        </el-form-item>
        <button @click="forgetNext">下一步</button>
      </el-form>
    </div>

    <!-- 新密码 -->
    <div class="newCode" v-show="!showForget">
      <div class="title">
        <div style="font-size: 24px; font-weight: 500">找回密码</div>
        <div @click="backLogin" class="backLogin">
          <img src="@/assets/register/返回.png" />
          返回登陆
        </div>
      </div>
      <el-form label-position="top">
        <el-form-item label="*密码">
          <el-input
            placeholder="请输入密码"
            suffix-icon="el-icon-view"
          ></el-input>
        </el-form-item>
        <el-form-item label="*密码确认">
          <el-input
            placeholder="请再次输入密码"
            suffix-icon="el-icon-view"
          ></el-input>
        </el-form-item>
        <div class="deployBtn">
          <button class="jump" @click="goback">取消</button>
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
      showForget: true,
    };
  },
  components: {},
  methods: {
    // 控制显示隐藏新用户配置
    forgetNext() {
      this.showForget = !this.showForget;
    },
    // 返回登录页
    backLogin() {
      this.$router.push({
        name: "login",
      });
      location.reload();
    },
    // 获取验证码
    getCode() {
      console.log("验证码666");
    },
    goback() {
      this.showForget = !this.showForget;
    },
    confirm() {
      alert("密码重置成功");
      setTimeout(() => {
        this.$router.push({
          name: "login",
        });
        location.reload();
      }, 500);
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
// 忘记密码
.forget {
  font-size: 14px;
  width: 440px;
  // height: 642px;
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

  .el-form-item {
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
  ::v-deep .code .el-input__inner {
    width: 250px;
    height: 32px;
  }
  ::v-deep .el-input__inner::placeholder {
    left: 15px;
    bottom: 7px;
  }
  ::v-deep [data-v-3133e50c] .el-input__suffix-inner {
    display: flex;
    color: #ed6d00;
    margin-top: 26px;
    margin-right: -5px;
    cursor: pointer;
  }
  button {
    width: 360px;
    height: 32px;
    border-radius: 16px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
}

// 新密码
.newCode {
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
    margin-top: 15px;
  }
  ::v-deep .el-input__inner::placeholder {
    left: 15px;
    bottom: 7px;
  }
  button {
    width: 170px;
    height: 32px;
    border-radius: 16px;
    margin-top: 40px;
  }
}
</style>