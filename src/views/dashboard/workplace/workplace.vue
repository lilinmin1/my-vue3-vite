<template>
  <div class="workplace">
    <div class="com-title">工作台</div>
    <div class="workplace-top">
      <el-row :gutter="20">
        <el-col v-for="(item, idx) in topList" :key="idx" :span="6">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>{{ item.name }}</span>
              </div>
            </template>
            <div>
              {{ item.desc }}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <div class="tab">
        <div
          v-for="item in list"
          :key="item.name"
          @click="changeComp(item)"
          :class="['tab-pane', { active: item.name == current }]"
        >
          {{ item.name }}
        </div>
      </div>
      <component :is="comp" :key="comp" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue-demi";
import TestChart from "./component/TestChart.vue";
import BarChart from "./component/BarChart.vue";
let current = ref(null);
let comp = ref(null);
let list = [
  {
    name: "testChart",
    comp: TestChart,
  },
  {
    name: "barChart",
    comp: BarChart,
  },
];

const topList = reactive([
  { name: "github", desc: "是一个面向开源及私有软件项目的托管平台。" },
  { name: "Vue", desc: "渐进式 JavaScript 框架" },
  { name: "Html5", desc: "HTML5是互联网的下一代标准。" },
  { name: "Js", desc: "路是走出来的，而不是空想出来的。" },
]);

onMounted(() => {
  changeComp(list[0]);
  current.value = list[0].name;
});
function changeComp(item) {
  comp.value = item.comp;
  current.value = item.name;
}
</script>

<style lang="less" scoped>
.workplace {
  .content {
    background: #fff;
    overflow: hidden;
    .tab {
      display: flex;
      border-bottom: 1px solid #ececec;
      cursor: pointer;
      .tab-pane {
        font-size: 20px;
        padding: 10px 20px;
      }
      .active {
        color: #2d8cf0;
        border-bottom: 2px solid #2d8cf0;
      }
    }
  }
}
</style>