<template>
  <div class="process">
    <div class="title">
      <p>{{ remainTime }} MIN LEFT</p>
    </div>
    <div class="bar">
      <div
        class="mybar"
        :class="style"
        :style="{ width: ((totalTime - remainTime) * 100) / totalTime + '%' }"
      ></div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
import handle from "../utils/api";

export default {
  props: ["style", "start_time", "time", "planId", "userId"],
  setup(props) {
    const calcTime = (time, start_time) => {
      let res = parseInt(new Date(time) - new Date(start_time)) / 1000 / 60;
      return res.toFixed(0);
    };

    // console.log(props);
    let totalTime = calcTime(props.time, props.start_time);
    let remainTime = calcTime(props.time, new Date());

    const data = reactive({
      ...props,
      totalTime,
      remainTime,
      now: new Date(),
    });
    let timer = setInterval(() => {
      data.now = new Date();
      console.log(data.now);
    }, 60000);

    watch(
      () => data.now,
      (newVal) => {
        if (parseInt(data.remainTime) <= 0) {
          alert("任务已经到时间了");
          data.remainTime = "0";
          handle.setStatus(props.planId, props.userId);
          clearInterval(timer);
        } else {
          // console.log("-------");
          data.remainTime = calcTime(props.time, newVal);
        }
      }
    );

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
.process {
  width: auto;
  height: 0.3rem;
  .title {
    p {
      font-weight: 900;
      font-style: normal;
      font-size: 0.13rem;
      color: rgba(0, 0, 0, 0.54);
    }
  }
  .bar {
    margin-top: 0.05rem;
    width: 1rem;
    height: 0.08rem;
    background-color: #fff;
    border-radius: 0.1rem;
    .mybar {
      width: 0;
      height: 0.08rem;
      border-radius: 0.1rem;
    }
  }
}
.orange {
  background-color: #e76b6b;
}

.blue {
  background-color: #4870dd;
}

.green {
  background-color: #0d9165;
}
</style>
