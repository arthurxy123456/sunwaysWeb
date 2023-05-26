<template>
  <div>
    <div class="LoginIndex">
      <div class="nav">
        <div class="navTitle appDownload">
          App下载
          <div class="appDownloadImg">
            <img src="@/assets/login/位图@2x.png" />
            <div class="appTitle">Sunways Portal</div>
          </div>
        </div>
        <div class="navTitle">示例用户</div>
        <div class="navTitle language" @click="showLanguage">
          <div class="chooseLanguage">
            <div>{{ language }}</div>
            <div>
              <img src="@/assets/login/展开@2x.png" />
            </div>
          </div>
          <ul class="languageList" v-show="showLanguageList">
            <li
              v-for="(item, index) in languageList"
              :key="index"
              @click="chooseLanguage(index)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="privacyBox">
        <div>隐私政策 ｜ 使用条款</div>
        <div>Copyright © 2023 SUNWAYS Inc. All rights reserved.</div>
      </div>
    </div>
    <Dialog />
  </div>
</template>

<script>
import Dialog from './components/Dialog.vue';
export default {
  components: { Dialog },
  data() {
    return {
      languageList: [
        "中文",
        "English",
        "Español",
        "Polski",
        "Português",
        "Deutsch",
        "Italiano",
        "Čeština",
      ],
      showLanguageList: false,
      language: "中文",
    };
  },
  methods: {
    showLanguage() {
      this.showLanguageList = !this.showLanguageList;
    },
    chooseLanguage(index) {
      this.language = this.languageList[index];
    },
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body {
  background-image: url("@/assets/login/bg@3x.png");
  background-position: center center;
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-attachment: fixed;
  background-size: 100% 100%;
}
.LoginIndex {
  position: relative;
  .nav {
    position: fixed;
    display: flex;
    right: 4%;
    top: 5%;
    .navTitle {
      margin-left: 20px;
      width: 112px;
      height: 32px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-family: " SourceHanSansCN-Regular, SourceHanSansCN";
      font-weight: 400;
      line-height: 24px;
    }
    .appDownload {
      position: relative;
      .appDownloadImg {
        display: none;
        position: absolute;
        top: 150%;
        width: 132px;
        height: 148px;
        background: #ffffff;
        box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.08);
        border-radius: 8px;
        img {
          margin: 10px;
        }
        .appTitle {
          text-align: center;
          margin-top: -15px;
        }
      }
    }
    .appDownload:hover {
      .appDownloadImg {
        display: block;
        color: #666;
      }
    }
    .language {
      width: 148px;
      height: 32px;
      border-radius: 16px;
      position: relative;
      .chooseLanguage {
        // width: 100%;
        display: flex;
        div {
          margin-right: 10px;
        }
        img {
          position: absolute;
          right: 14%;
          bottom: 25%;
        }
      }

      .languageList {
        position: absolute;
        top: 150%;
        width: 70%;
        height: auto;
        list-style: none;
        color: #666;
        border-radius: 16px;
        li {
          height: 8%;
          width: auto;
          background-color: white;
          padding-top: 5%;
          padding-left: 5%;
        }
        li:hover {
          color: #ed6d00;
          background-color: #fff6f0;
        }
      }
    }

    .navTitle:hover {
      cursor: pointer;
      color: #ed6d00;
    }
  }
  .privacyBox {
    height: 48px;
    font-size: 16px;
    font-family: "SourceHanSansCN-Regular, SourceHanSansCN";
    font-weight: 400;
    color: #ffffff;
    line-height: 24px;
    text-align: center;
    position: fixed;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
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