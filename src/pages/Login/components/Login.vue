<template>
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
      <div @click="goRegister(type[1])">注册</div>
      <div @click="goForget(type[2])">忘记密码?</div>
    </div>
  </div>
  
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  data() {
    return {
      user: "",
      password: "",
      type: ["登录", "注册", "忘记密码"],
    };
  },
  methods: {
    // 去注册页面
    goRegister(data) {
      this.$router.push({
        name: "register",
      });
      pubsub.publish('showRegister',data)
      window.location.reload()
    },
    // 去忘记密码页面
    goForget(data) {
      this.$router.go({
        name: "forget ",
      });
      pubsub.publish('showForget',data)
      window.location.reload()
    },
  },
};
</script>

<style lang="less">
//   登录模态框样式
.login {
  width: 440px;
  height: 394px;
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
</style>