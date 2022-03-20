<template>
  <div class="categeoris">
    <div class="title">
      <p>CATEGEORIS</p>
    </div>
    <div class="list">
      <div
        class="item"
        v-for="item in categeoris"
        :key="item.id"
        :class="item.style"
        @click="goToPublish(item.id)"
      >
        <div class="des">
          <p>{{ item.category }}</p>
        </div>
        <div class="bg">
          <img :src="item.imgUrl" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";

import handle from "../utils/api";
export default {
  setup() {
    const router = useRouter();
    const data = reactive({
      categeoris: [],
    });
    onMounted(async () => {
      let res = await handle.getAllCategeoris();
      console.log(res.data.data);
      data.categeoris = res.data.data;
    });
    const goToPublish = (e) => {
      router.push("/publishPlan/" + e);
      // console.log(e);
    };
    return {
      ...toRefs(data),
      goToPublish,
    };
  },
};
</script>

<style lang="less" scoped>
@import "../utils/common.less";
.categeoris {
  width: 3.45rem;
  height: 2.6rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    p {
      .media-title();
    }
  }
  .list {
    width: 100%;
    height: 2.3rem;
    display: flex;
    overflow-x: scroll;
    .item {
      width: 1.88rem;
      height: 2.3rem;
      margin-right: 0.2rem;
      flex-shrink: 0;
      overflow: hidden;
      border-radius: 0.15rem;
      position: relative;
      .des {
        width: 1.6rem;
        height: 1.2rem;
        text-align: center;
        position: absolute;
        top: -0.22rem;
        left: -0.12rem;
        p {
          font-weight: 400;
          font-style: normal;
          font-size: 0.2rem;
          line-height: 1.2rem;
        }
      }
      .bg {
        width: 2.8rem;
        height: 1.6rem;
        position: absolute;
        left: 0.36rem;
        top: 0.52rem;
        z-index: 1;
        img {
          width: 2.8rem;
          height: 1.6rem;
        }
      }
    }
  }
}

.orange {
  background-color: #ffe7e7;
  .des {
    background-color: #ffc5b8;
    border-radius: 37% 63% 46% 54% / 30% 34% 66% 70%;
  }
}

.blue {
  background-color: #dae1f4;
  .des {
    background-color: #c6d3f5;
    border-radius: 37% 63% 46% 54% / 30% 34% 66% 70%;
  }
}

.green {
  background-color: #e4f3ee;
  .des {
    background-color: #d5eee6;
    border-radius: 37% 63% 46% 54% / 30% 34% 66% 70%;
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
