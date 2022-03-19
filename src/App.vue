<template>
  <div>
    <router-view />
    <bottom-nav />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import BottomNav from "./components/BottomNav.vue";

export default {
  components: {
    BottomNav,
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
body {
  font-size: 0.14rem;
  font-family: "GT Ultra Trial";
  background: rgb(187, 78, 78);
}

a {
  color: #000;
  text-decoration: none;
}

li {
  list-style: none;
}
</style>
