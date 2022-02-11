<template>
  <div class="layout-sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in menuList">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}</el-menu-item
                >
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index"
                >{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { computed, watch } from "vue";
const menuList = [
  {
    icon: "el-icon-lx-home",
    index: "/dashboard",
    title: "系统首页",
  },
  {
    icon: "el-icon-lx-cascades",
    index: "/table",
    title: "基础表格",
  },
  {
    icon: "el-icon-lx-copy",
    index: "/tabs",
    title: "tab选项卡",
  },
  {
    icon: "el-icon-lx-calendar",
    index: "3",
    title: "表单相关",
    subs: [
      {
        index: "/form",
        title: "基本表单",
      },
      {
        index: "/upload",
        title: "文件上传",
      },
      {
        index: "4",
        title: "三级菜单",
        subs: [
          {
            index: "/editor",
            title: "富文本编辑器",
          },
        ],
      },
    ],
  },
  {
    icon: "el-icon-lx-warn",
    index: "7",
    title: "错误处理",
    subs: [
      {
        index: "/permission",
        title: "权限测试",
      },
      {
        index: "/404",
        title: "404页面",
      },
    ],
  },
];

const route = useRoute();

const onRoutes = computed(() => {
  return route.path;
});

// const store = useStore();
// const collapse = computed(() => store.state.collapse);
</script>
<style scoped>
.layout-sidebar {
  background: rgb(0, 20, 40);
}
</style>