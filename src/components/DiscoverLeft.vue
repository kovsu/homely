<template>
  <div class="left">
    <div class="title">
      <p>WHERE YOU LEFT</p>
    </div>
    <div class="plan">
      <div class="des" v-if="plan.length === 0">
        <p>You don't have any plan.</p>
        <span>Let's do something meaningful!</span>
      </div>
      <div class="plan-item" v-else :class="plan[0].style">
        <div class="item-des">
          <p>{{ plan[0].name }}</p>
          <ProcessBar
            :style="plan[0].style"
            :start_time="plan[0].start_time"
            :time="plan[0].time"
            :planId="plan[0].id"
            :userId="plan[0].user_id"
          />
        </div>
        <div class="bg">
          <img :src="plan[0].imgUrl" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import handle from "../utils/api";
import ProcessBar from "./ProcessBar.vue";
export default {
  components: {
    ProcessBar,
  },
  setup() {
    const data = reactive({
      plan: [],
    });
    onMounted(async () => {
      let res = await handle.getMyPlan(1);
      console.log("plan", res.data.res);
      data.plan = res.data.res;
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
@import "../utils/common.less";
.left {
  width: 3.45rem;
  height: 2.04rem;
  margin: 0.3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .title {
    .media-title();
  }
  .plan {
    width: 100%;
    height: 1.75rem;
    border-radius: 0.15rem;
    overflow: hidden;
    .des {
      width: 100%;
      height: 1.75rem;
      background-color: rgb(238, 238, 238);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p {
        font-weight: 700;
        font-style: normal;
        font-size: 0.2rem;
      }
    }
    .plan-item {
      width: 100%;
      height: 1.75rem;
      position: relative;
      .item-des {
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        z-index: 1;
        p {
          font-weight: 700;
          font-style: normal;
          font-size: 0.22rem;
        }
      }
      .bg {
        width: 2.57rem;
        height: 2.22rem;
        position: absolute;
        left: 1rem;
        top: -0.05rem;
        img {
          width: 2.57rem;
          height: 2.22rem;
        }
      }
    }
  }
}

.orange {
  background-color: #ffe7e7;
  .bg {
    background-color: #ffc5b8;
    border-radius: 68% 32% 50% 50% / 72% 80% 20% 28%;
  }
}

.blue {
  background-color: #dae1f4;
  .bg {
    background-color: #c6d3f5;
    border-radius: 68% 32% 50% 50% / 72% 80% 20% 28%;
  }
}

.green {
  background-color: #e4f3ee;
  .bg {
    background-color: #d5eee6;
    border-radius: 68% 32% 50% 50% / 72% 80% 20% 28%;
  }
}
</style>
