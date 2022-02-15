<template>
  <div class="layout-header">
    <div class="header-left">
      <el-icon :size="20"><expand /></el-icon>
      <el-icon :size="20"><fold /></el-icon>
      <el-icon :size="20"><RefreshRight @click="reloadPage" /></el-icon>
    </div>
    <div class="header-right">
      <el-icon :size="20"><lock /></el-icon>
    </div>
  </div>
</template>

<script setup>
import { ref, unref, isRef } from "vue";
// 需要先从这个里面拿出icon才能使用
import { Expand, Fold, RefreshRight, Lock } from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";
// useRoute 返回当前路由地址 useRouter 返回router实例
const route = useRoute();
const router = useRouter();
console.log(isRef(route), isRef(route) ? route.value : route);
const reloadPage = () => {
  router.push({
    path: "/" + unref(route).fullPath,
  });
};

// function reduceSub(xs) {
//   debugger;
//   if (xs.length === 0) return 0;
//   var first = xs.shift();
//   var initVal = Array.isArray(first) ? reduceSub(first) : first;

//   return xs.reduce((left, right) => {
//     return left - (Array.isArray(right) ? reduceSub(right) : right);
//   }, initVal);
// }
// [5, [[4, 3], 2, 1]]
// function foo(arr) {
//     debugger
//   let result = 0;
//   arr.forEach((num, idx) => {
//     num = Array.isArray(num) ? foo(num) : num;
//     if (idx) {
//       result -= num;
//     } else {
//       result = num;
//     }
//   });

//   return result;
// }

// console.log(foo([5, [[4, 3], 2, 1]]));
</script>

<style lang="less" scoped>
.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
}
</style>