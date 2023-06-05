<template>
  <div>
    <NavMeau />

    <el-row :gutter="20" class="content" style="width: 100%; height: 100%">
      <!-- 左边部分 -->
      <el-col :span="6">
        <LeftCard/>
      </el-col>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import NavMeau from "@/components/NavMeau/index.vue";
import LeftCard from './components/LeftCard.vue';
export default {
  components: { NavMeau,LeftCard },
  data() {
    return {
      
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

.content {
  padding: 80px 0px 0px 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  line-height: 20px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>