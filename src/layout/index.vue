<template>
  <div class="layout">
    <nav>
      <div class="logo"></div>
      <a-menu
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="state.selectedKeys"
        style="width: 256px; height: 100%"
        mode="inline"
        :theme="state.theme"
        :items="state.items"
      />
    </nav>
    <main>
      <header></header>
      <div class="content">
        <slot></slot>
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
  background: #001529;
}

header {
  height: 60px;
  background: #ffffff;
}

main {
  width: calc(100% - 256px);
  overflow-y: scroll;
}

nav {
  width: 256px;
  height: calc(100vh);
  overflow-y: scroll;
}

.layout {
  display: flex;
  background: #eff2f5;
}

.layout .content {
  padding: 20px;
  height: calc(100vh - 60px);
  overflow: scroll;
}
</style>