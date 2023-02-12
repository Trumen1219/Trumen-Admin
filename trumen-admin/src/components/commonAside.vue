<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item v-for="item in noChild" :index="item.path">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
        <el-menu-item-group v-for="item in hasChild">
          <template slot="title">{{ item.name }}</template>
        </el-menu-item-group>
      </el-menu>
    </el-col> 
  </el-row>
</template>

<script>
export default {
  name: 'commonAside',
  computed: {
    hasChild() {
      return this.menu.filter(item => item.children)
    },
    noChild() {
      return this.menu.filter(item => !item.children)
    }
  },
  data() {
    return {
      menu: [
        {
          path: '/',
          name: 'Dashboard',
          label: 'Dashboard',
          icon: 's-help',
          url: '/Dashboard',
          children: {
            path: '/Dashboard',
            name: 'Option',
            label: 'DashboardChildren',
            icon: 's-help',
            url: '/Dashboard/Children',
          }
        },
        {
          path: '/',
          name: 'Example',
          label: 'Example',
          icon: 's-order',
          url: '/Example'
        },
        {
          path: '/Form',
          name: 'Form',
          label: 'Form',
          icon: 's-ticket',
          url: 'Form'
        },
        {
          path: '/',
          name: 'Nested',
          label: 'Nested',
          icon: 's-finance',
          url: 'Nested'
        },
        {
          path: '/',
          name: 'External Link',
          label: 'External Link',
          icon: 's-data',
          url: 'ExternalLink'
        },
        {
          path: '/',
          name: 'Donate',
          label: 'Donate',
          icon: 'printer',
          url: 'Donate'
        },
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<styler lang="less" scoped>
.el-menu {
  border: 0;
}
</styler>