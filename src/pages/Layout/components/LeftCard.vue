<template>
  <div class="leftCard">
    <!-- 功率echart -->
    <el-card class="box-card echart">
      <div class="echartTop">
        <div id="main"></div>
        <div class="echartTopRight">
          <div>
            <div>当前功率 (MW)</div>
            <div
              style="
                font-size: 32px;
                font-weight: bold;
                color: #ed6d00;
                line-height: 32px;
              "
            >
              17.51
            </div>
          </div>
          <div>
            <div>装机容量 (GWp)</div>
            <div
              style="
                font-size: 20px;
                font-weight: bold;
                color: #ed6d00;
                line-height: 20px;
              "
            >
              2.72
            </div>
          </div>
        </div>
      </div>
      <div class="echartBottom">
        <div
          class="echartBottomList"
          v-for="(item, index) in echartBottomList"
          :key="index"
          :style="{ background: item.color }"
        >
          <div class="quantityTitle">{{ item.title }}</div>
          <div>{{ item.quantity }}</div>
        </div>
      </div>
    </el-card>

    <!-- 节能减排 -->
    <el-card class="box-card thrifty">
      <div class="clearfix">
        <div class="clearfixLeft">
          <div class="line"></div>
          <div class="title">节能减排</div>
        </div>
      </div>
      <div class="thriftyList">
        <div
          class="thriftyListItem"
          v-for="(item, index) in thriftyList"
          :key="index"
        >
          <img style="width: 48px; height: 48px" :src="item.imgUrl" />
          <div class="thriftyCount">{{ item.count }}</div>
          <div class="thriftyTitle">{{ item.title }}</div>
        </div>
      </div>
    </el-card>

    <!-- 单位发电量排名 -->
    <el-card class="box-card">
      <div class="clearfix">
        <div class="clearfixLeft">
          <div class="line"></div>
          <div class="title">单位发电量排名</div>
        </div>
        <div class="clearfixRight">
          <div>全部</div>
          <img
            src="@/assets/layout/展开@2x(1).png"
            style="width: 16px; height: 16px"
          />
        </div>
      </div>
      <div id="powerRanking"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      // echart底部列表
      echartBottomList: [
        { title: "当日发电 (DWh)", quantity: "122.44", color: "#FAEBEB" },
        { title: "当月发电 (MWh)", quantity: "212.23", color: "#FFF7E6" },
        { title: "当年发电 (GWh)", quantity: "321.15", color: "#EBFAF2" },
        { title: "累计发电 (GWh)", quantity: "479.87", color: "#EBF5FA" },
      ],
      // 节能减排列表
      thriftyList: [
        {
          imgUrl: require("@/assets/layout/植树@2x.png"),
          count: "9854",
          title: "植树造林 (棵)",
        },
        {
          imgUrl: require("@/assets/layout/CO2@2x.png"),
          count: "727.68",
          title: "CO2减排 (吨)",
        },
        {
          imgUrl: require("@/assets/layout/节煤@2x.png"),
          count: "453.34",
          title: "节约煤炭 (吨)",
        },
      ],
    };
  },
  methods: {
    myEcharts() {
      const chartDom = document.getElementById("main");
      const myChart = echarts.init(chartDom);
      const option = {
        title: {
          text: "功率比",
          subtext: "25.21%",
          left: "center",
          top: "30%",
          textStyle: {
            fontSize: 14,
            color: "#666666",
          },
          subtextStyle: {
            fontSize: 20,
            color: "#ED6D00",
          },
        },
        tooltip: {
          trigger: "item",
        },
        // legend: {
        //   top: '5%',
        //   left: 'center'
        // },
        color: ["#ED6D00", "#FFF1E6"],
        series: [
          {
            type: "pie",
            radius: ["70%", "90%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                // show: true,
                // fontSize: 40,
                // fontWeight: 'bold'
              },
            },
            labelLine: {
              // show: false
            },
            data: [
              { value: 5, name: "清华" },
              { value: 15, name: "北大" },
            ],
          },
        ],
      };
      chartDom.style.float = "left";

      option && myChart.setOption(option);
    },
    power() {
      const chartDom = document.getElementById("powerRanking");
      const myChart = echarts.init(chartDom);
      // prettier-ignore
      const dataAxis = ['物联网…', '慈溪市…', 'Selfa_…', 'Owcez…', 'Dom', 'Dom', 'Bydgo…'];
      // prettier-ignore
      const data = [220, 182, 191, 234, 290, 330, 310];
      const yMax = 500;
      const dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      const option = {
        yAxis: {
          type: 'category',
          data: dataAxis,
          axisLabel: {
            inside: true,
            color: "#fff",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        xAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#999",
          },
        },

        dataZoom: [
          {
            type: "inside",
          },
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" },
                ]),
              },
            },
            data: data,
          },
        ],
      };
      // Enable data zoom when user click bar.
      const zoomSize = 6;
      myChart.on("click", function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
          type: "dataZoom",
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue:
            dataAxis[
              Math.min(params.dataIndex + zoomSize / 2, data.length - 1)
            ],
        });
      });

      option && myChart.setOption(option);
    },
  },
  mounted() {
    this.myEcharts();
    this.power();
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.leftCard {
  .echart {
    width: 100%;
    padding-right: -20px;
    .echartTop {
      width: 100%;
      display: flex;
      justify-content: space-between;
      #main {
        width: 43%;
        height: 160px;
        display: flex;
        // padding-left: 10px;
      }
      .echartTopRight {
        width: 45%;
        font-size: 14px;
        font-weight: 400;
        color: #666666;
        line-height: 21px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
    }
    .echartBottom {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .echartBottomList {
        width: 45%;
        height: 64px;
        border-radius: 4px;
        padding: 12px 0px 0px 12px;
        margin-top: 5%;
        .quantityTitle {
          font-size: 14px;
          font-weight: 400;
          color: #666666;
          line-height: 21px;
          margin-bottom: 4px;
        }
      }
    }
  }
  // 节能减排
  .thrifty {
    .thriftyList {
      display: flex;
      justify-content: space-between;
      .thriftyListItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        .thriftyCount {
          font-size: 20px;
          font-weight: bold;
          color: #333333;
          line-height: 20px;
        }
        .thriftyTitle {
          font-size: 14px;
          font-weight: 400;
          color: #666666;
          line-height: 21px;
        }
      }
    }
  }

  // 单位发电量排名
  #powerRanking{
    width: 300px;
    height: 300px;
  }
  .clearfix {
    font-size: 20px;
    font-weight: 500;
    color: #333333;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    .clearfixLeft {
      display: flex;
      align-items: center;
      .line {
        width: 4px;
        height: 16px;
        background: #ed6d00;
        border-radius: 2px;
      }
      .title {
        margin-left: 12px;
      }
    }
    .clearfixRight {
      display: flex;
      align-items: center;
      div {
        margin-right: 10px;
        font-size: 14px;
        font-weight: 400;
        color: #666666;
        line-height: 21px;
      }
    }
  }
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