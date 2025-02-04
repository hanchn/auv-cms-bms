<template>
  <div class="layout">
    <nav class="menu">
      <div class="logo"></div>
      <div class="menu-wrap">
        <a-menu
          v-model:openKeys="state.openKeys"
          v-model:selectedKeys="state.selectedKeys"
          style="width: 256px; height: 100%"
          mode="inline"
          :theme="state.theme"
          :items="state.items"
        />
      </div>
    </nav>
    <main>
      <header></header>
      <div class="content">
        <div class="breadcrumb">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="content-wrap">
          <slot></slot>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { reactive, h } from "vue";
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import { useRouter } from "vue-router"
const router = useRouter()
console.log('router ', router);
const state = reactive({
  theme: "dark",
  selectedKeys: ['1'],
  openKeys: 'sub1',
  routes: [],
  changeTheme: (checked) => {
    theme.value = checked ? 'dark' : 'light';
  },
  items: [
    {
      key: '1',
      icon: () => h(MailOutlined),
      label: 'Navigation One',
      title: 'Navigation One',
    },
    {
      key: '2',
      icon: () => h(CalendarOutlined),
      label: 'Navigation Two',
      title: 'Navigation Two',
    },
    {
      key: 'sub1',
      icon: () => h(AppstoreOutlined),
      label: 'Navigation Three',
      title: 'Navigation Three',
      children: [
        {
          key: '3',
          label: 'Option 3',
          title: 'Option 3',
        },
        {
          key: '4',
          label: 'Option 4',
          title: 'Option 4',
        },
        {
          key: 'sub1-2',
          label: 'Submenu',
          title: 'Submenu',
          children: [
            {
              key: '5',
              label: 'Option 5',
              title: 'Option 5',
            },
            {
              key: '6',
              label: 'Option 6',
              title: 'Option 6',
            },
          ],
        },
      ],
    },
    {
      key: 'sub2',
      icon: () => h(SettingOutlined),
      label: 'Navigation Four',
      title: 'Navigation Four',
      children: [
        {
          key: '7',
          label: 'Option 7',
          title: 'Option 7',
        },
        {
          key: '8',
          label: 'Option 8',
          title: 'Option 8',
        },
        {
          key: '9',
          label: 'Option 9',
          title: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
          title: 'Option 10',
        },
      ],
    },
  ]
});
</script>
<style scoped>
.logo {
  height: 80px;
}

header {
  height: 60px;
  background: #ffffff;
  box-shadow: 0 2px 8px #f0f1f2;
}

main {
  width: calc(100% - 256px);
}

.menu-wrap {
  height: calc(100vh - 100px);
  overflow-y: scroll;
  padding-bottom: 20px;
}

nav.menu {
  width: 256px;
  height: calc(100vh);
  background: #001529;
}

.layout {
  display: flex;
  background: #eff2f5;
}

.layout .content {
  padding: 24px;
  margin: 14px;
  height: calc(100vh - 100px);
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 8px #f0f1f2;
}

.layout .content .breadcrumb{
  margin-bottom: 30px;
}

.layout .content .content-wrap{
  width: 100%;
  height: calc(100% - 40px);
  overflow-y: scroll;
}
</style>