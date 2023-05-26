<template>
  
</template>

<script>
export default {
    methods: {
        backLogin(){

        }
    },
};
</script>

<style lang="less">
.deploy {
  font-size: 14px;
  width: 440px;
  height: 642px;
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
    .backLogin{
      cursor: pointer;
    }
  }

  .el-form-item {
    margin-bottom: 0px;
  }
  .el-form-item__label {
    margin-bottom: -50px;
  }
  .el-input__inner {
    width: 360px;
    height: 32px;
    border-radius: 16px;
  }
  .register {
    margin-top: 20px;
  }
  .el-checkbox {
    margin-top: 20px;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #ed6d00;
    border-color: #ed6d00;
  }
  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #666;
  }
  .el-input__icon {
    margin-top: 15px;
  }
  button {
    width: 360px;
    height: 32px;
    border-radius: 16px;
  }
}
</style>