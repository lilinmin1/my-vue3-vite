<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form
        :model="param"
        :rules="rules"
        ref="loginForm"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="username">
            <template #prepend>
              <el-button icon="el-icon-user"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="param.password"
          >
            <template #prepend>
              <el-button icon="el-icon-lock"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>



<script setup>
import { ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
const router = useRouter();
const param = reactive({
  username: "admin",
  password: "123123",
});
/**
 * 在使用组合式API时，响应式应用和模板引用的概念是统一的。
 * 为了获得对模板内元素或组件实例的应用，我们可以声明ref并从setup()返回
 */

/**
 * https://v3.cn.vuejs.org/guide/composition-api-template-refs.html
 * 这里我们在渲染上下文中暴露loginForm，并通过ref="loginForm"，将其绑定到div作为其ref
 * 在虚拟DOM补丁算法中，如果VNode的ref键对应于渲染上下文的ref，则VNode的相应元素或组件实例将被分配给改ref的值。
 * 这是在虚拟DOM挂载/打补丁过程中执行的，因此模板引用只会在初始化渲染之后获得赋值
 */
// 作为模板使用的 ref 的行为与任何其他 ref 一样：它们是响应式的，可以传递到 (或从中返回) 复合函数中。
const loginForm = ref(null);
const count = ref(444);
const rules = {
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
  ],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};
const submitForm = () => {
  loginForm.value.validate((valid) => {
    if (valid) {
      ElMessage.success("登录成功");
      localStorage.setItem("ms_username", param.username);
      router.push("/");
    } else {
      ElMessage.error("登录失败");
      return false;
    }
  });
};
// onMounted(() => {
//     console.log(count, param)
// })
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/img/login-bg.jpg);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>