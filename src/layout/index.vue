<template>
  <el-container>
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
</template>

<script setup>
import SideBar from "./SideBar.vue";
import Header from "./Header.vue";
</script>

<style scoped>
</style>