<template>
  <div>
    <NavMeau />
    <div class="Echarts">
      <div id="main" style="width: 600px; height: 400px"></div>
    </div>
  </div>
</template>

<script>
import NavMeau from "@/components/NavMeau/index.vue";
import * as echarts from "echarts";
export default {
  components: { NavMeau },
  methods: {
    myEcharts() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          top: "5%",
          left: "90%",
          top:"30%",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
  mounted() {
    this.myEcharts();
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
</style>