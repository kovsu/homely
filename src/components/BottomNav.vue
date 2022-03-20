<template>
  <div class="container">
    <div class="nav">
      <div class="item" v-for="(item, index) in items" :key="index">
        <router-link :to="item.path" class="link">
          <img
            :src="item.path === route.path ? item.chosen : item.imgUrl"
            alt=""
            class="icon"
          />
          <p>{{ item.text }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const data = reactive({
      items: [
        {
          path: "/discover",
          text: "Discover",
          imgUrl: require("../assets/Discover.png"),
          chosen: require("../assets/Discover_chosen.png"),
        },
        {
          path: "/rentals",
          text: "Rentals",
          imgUrl: require("../assets/Rentals.png"),
          chosen: require("../assets/Rentals_chosen.png"),
        },
        {
          path: "/profiles",
          text: "Profile",
          imgUrl: require("../assets/Profile.png"),
          chosen: require("../assets/Profile_chosen.png"),
        },
      ],
    });

    const route = useRoute();

    return {
      ...toRefs(data),
      route,
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 2.95rem;
  height: 0.65rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  left: 50%;
  bottom: 0.3rem;
  transform: translateX(-50%);
  z-index: 9;
  .nav {
    width: 2.95rem;
    height: 0.65rem;
    border-radius: 1rem;
    backdrop-filter: blur(0.1rem);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    .item {
      width: 0.75rem;
      height: 0.5rem;
      .link {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        .icon {
          width: 0.24rem;
          height: 0.24rem;
        }
        p {
          display: block;
          width: auto;
          height: 0.13rem;
          margin: 0;
          font-style: normal;
          font-weight: 700;
          font-size: 0.12rem;
          color: rgba(0, 0, 0, 0.64);
          line-height: 0.13rem;
          text-align: center;
        }
      }
      .router-link-active {
        p {
          color: #ff8c73;
        }
      }
    }
  }
}
</style>
