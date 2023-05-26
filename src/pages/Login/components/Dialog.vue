<template>
  <div class="dialog">
    <!-- 登录 -->
    <Login v-show="type === 'login'" />
    <!-- 注册 -->
    <Register v-show="type === 'register'" />
    <!-- 忘记密码 -->
    <Forget v-show="type === 'forget'" />
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import Login from "./Login.vue";
import Forget from "./Forget.vue";
import Register from "./Register.vue";
export default {
  components: { Login, Register, Forget },
  data() {
    return {
      type: "login",
    };
  },
  mounted() {
    if (this.$route.name == "login") {
      this.type = "login";
    } else if (this.$route.name == "register") {
      this.type = "register";
    } else if (this.$route.name == "forget") {
      this.type = "forget";
    }
    this.pubRegisterID = pubsub.subscribe("showRegister", (msgName, data) => {
      this.type = data;
    });
    this.pubForgetID = pubsub.subscribe("showForget", (msgName, data) => {
      this.type = data;
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubRegisterID);
    pubsub.unsubscribe(this.pubForgetID);
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.dialog {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  backdrop-filter: blur(8px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>