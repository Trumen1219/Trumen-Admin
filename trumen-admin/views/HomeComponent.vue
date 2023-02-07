<template>
  <el-container style="height:100%">
    <el-aside>
      <commonAside />
    </el-aside>
    <el-container>
      <el-header>header</el-header>
      <el-main>main</el-main>
    </el-container>
  </el-container>
</template>
<script>
import commonAside from '@/components/commonAside.vue';
export default {
  name: 'HomeComponent',
  components: { commonAside },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.el-aside{
  overflow: hidden;
}
/* .el-aside {
    height: 100%;
    width: 210px;
    color: rgb(191, 203, 217);
    background-color: #304156; */
/* color: rgb(64, 158, 255) */
/* } */
</style>  