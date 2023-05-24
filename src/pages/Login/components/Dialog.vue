<template>
  <div class="dialog">
    <!-- 登录 -->
    <div class="login">
      <img src="@/assets/login/logo@2x.png" alt="" />
      <div class="userInput">
        <img class="icon icon-left" src="@/assets/login/用户名@3x.png" />
        <input
          placeholder="请输入用户名"
          v-model="user"
          style="width: 360px"
          class="user"
        />
      </div>
      <div class="passwordInput">
        <img class="icon icon-left" src="@/assets/login/密码@3x.png" />
        <input
          placeholder="请输入密码"
          v-model="password"
          style="width: 360px"
          class="password"
        />
        <img class="icon icon-right" src="@/assets/login/关闭@3x.png" />
      </div>
      <button>登录</button>
      <div class="loginText">
        <div>注册</div>
        <div>忘记密码?</div>
      </div>
    </div>
    <!-- 注册 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      password: "",
    };
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.dialog {
  width: 440px;
  height: 394px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  backdrop-filter: blur(8px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //   登录模态框样式
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;

    .userInput {
      position: relative;
      display: inline-block;
    }
    .passwordInput {
      position: relative;
      display: inline-block;
    }
    .icon {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 6%;
    }

    .icon-left {
      left: 10px;
    }

    .icon-right {
      right: 10px;
    }
    img {
      width: 175px;
      margin-top: 40px;
    }
    .loginText {
      width: 360px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 28px;
      font-weight: 400;
      color: #ed6d00;
      line-height: 24px;
      cursor: pointer;
    }
  }
}

// 公共样式
input {
  height: 48px;
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #e0e0e0;
  line-height: 24px;
  margin-top: 30px;
  border: none;
}

input:focus {
  outline: none;
}
input::placeholder {
  position: absolute;
  left: 40px;
  padding-top: 15px;
}
button {
  cursor: pointer;
  width: 360px;
  height: 48px;
  background-color: #ed6d00;
  color: #ffffff;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: 40px;
}
</style>