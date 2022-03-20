<template>
  <div>
    <head-status />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component
          :is="Component"
          :key="$route.name"
          v-if="$route.meta.keepAlive"
        />
      </keep-alive>
      <component
        :is="Component"
        :key="$route.name"
        v-if="!$route.meta.keepAlive"
      />
    </router-view>
    <bottom-nav />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import BottomNav from "./components/BottomNav.vue";
import HeadStatus from "./components/HeadStatus.vue";

export default {
  components: {
    BottomNav,
    HeadStatus,
  },
  setup() {
    const data = reactive({});
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

body {
  font-size: 0.14rem;
  font-family: "GT Ultra Trial";
}

a {
  color: #000;
  text-decoration: none;
}

li {
  list-style: none;
}
</style>
