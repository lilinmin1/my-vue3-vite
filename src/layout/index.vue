<template>
  <div class="layout">
    <el-container style="height: 100%;">
      <el-aside> <SideBar /></el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main>
          <RouterView>
            <template #default="{ Component, route }">
              <keep-alive>
                <component :is="Component" :key="route.fullPath" />
              </keep-alive>
            </template>
          </RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import SideBar from "./SideBar.vue";
import Header from "./Header.vue";
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  background: #f5f7f9;
  .el-header {
    background: #fff;
  }
}
</style>