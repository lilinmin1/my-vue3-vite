<template>
  <div id="testChart" :style="{ height, width }"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue-demi";
defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "600px",
  },
});
onMounted(() => {
  initEchart();
});
function initEchart() {
  let chart = echarts.init(document.getElementById("testChart"));
  // 把配置和数据放这里
  chart.setOption({
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  });
  window.onresize = function () {
    //自适应大小
    chart.resize();
  };
}
</script>
