<template>
  <div class="echarts-box">
    <div id="myEcharts" :style="{ width: '900px', height: '300px' }"></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue-demi";
onMounted(() => {
  initEchart();
});
function initEchart() {
  let chart = echarts.init(document.getElementById("myEcharts"));
  // 把配置和数据放这里
  chart.setOption({
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
