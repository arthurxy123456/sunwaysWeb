<template>
  <div class="navMenu">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item>
        <img class="logo" src="@/assets/layout/logo@2x.png" />
      </el-menu-item>
      <el-menu-item class="navTitleFirst" index="1">
        <div class="navTitle">
          <img src="@/assets/layout/总览@2x.png" />
          <span>总览</span>
        </div>
      </el-menu-item>
      <el-menu-item index="2">
        <div class="navTitle">
          <img src="@/assets/layout/电站@2x.png" />
          <span>电站</span>
        </div>
      </el-menu-item>
      <el-menu-item index="3">
        <div class="navTitle">
          <img src="@/assets/layout/管理@2x.png" />
          <span>管理</span>
        </div>
      </el-menu-item>
      <el-menu-item index="4">
        <div class="navTitle">
          <img src="@/assets/layout/控制@2x.png" />
          <span>控制</span>
        </div>
      </el-menu-item>
      <el-menu-item index="5">
        <div class="navTitle">
          <img src="@/assets/layout/告警@2x.png" />
          <span>告警</span>
        </div>
      </el-menu-item>
      <!-- 右边部分 -->
      <el-menu-item>
        <div class="language">
          <span>中文</span>
          <img src="@/assets/layout/展开@2x.png" />
          <img class="navImg" src="@/assets/layout/疑问@2x.png" />
          <img class="navImg" src="@/assets/layout/通知@2x.png" />
          <img class="navImg" src="@/assets/layout/头像@2x.png" />
          <span style="margin-left: 18px">admin</span>
          <img class="navImg" src="@/assets/layout/设置@2x.png" />
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.navMenu {
  .logo {
    width: 146px;
    height: 28px;
    margin-left: 10%;
  }
  .navTitleFirst{
    margin-left: 20%;
  }
  .navTitle {
    width: 120px;
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 28px;
      height: 28px;
      margin-top: 20px;
    }
    span {
      margin-top: -20px;
    }
  }
  .language {
    position: fixed;
    right: 2%;
    img {
      width: 16px;
      height: 16px;
      margin-left: 8px;
    }
    .navImg {
      width: 24px;
      height: 24px;
      margin-left: 30px;
    }
  }
}
</style>