<template>
  <div class="publishContainer">
    <div class="bg" :class="plan.style">
      <div class="des">
        <p>{{ plan.category }}</p>
      </div>
      <img :src="plan.imgUrl" alt="" />
    </div>
    <div class="table">
      <div class="name">
        <p>Plan Name</p>
        <input type="text" v-model="planName" />
      </div>
      <div class="startTime">
        <p>From</p>
        <input type="text" value="NOW" disabled />
      </div>
      <div class="time">
        <p>Druation</p>
        <select id="group" :value="option" @change="changeOption($event)">
          <option value="0">15 MINS</option>
          <option value="1">30 MINS</option>
          <option value="2">45 MINS</option>
        </select>
      </div>
    </div>
    <div class="submit">
      <a @click="publish">PUBLISH</a>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRoute } from "vue-router";
import handle from "../utils/api";

export default {
  setup() {
    const route = useRoute();
    const data = reactive({
      plan: {},
      planName: "",
      option: "0",
    });

    onMounted(async () => {
      let res = await handle.getPlanInfo(route.params.id);
      console.log(res.data.res);
      data.plan = res.data.res[0];
    });

    const changeOption = (e) => {
      data.option = e.target.selectedIndex;
    };

    const publish = async () => {
      if (data.planName === "") return;
      let start_time = new Date();
      let time = new Date(
        start_time.getTime() + 1000 * 60 * (parseInt(data.option) + 1) * 15
      ).toLocaleString();
      let res = await handle.publishPlan(
        route.params.id,
        1,
        data.planName,
        start_time.toLocaleString(),
        time
      );
      console.log(res);
      alert(res.data.msg);
      console.log(time);
    };

    return {
      ...toRefs(data),
      changeOption,
      publish,
    };
  },
};
</script>

<style lang="less" scoped>
.publishContainer {
  width: 3.45rem;
  height: auto;
  margin: 0 auto;
  .bg {
    width: 3.45rem;
    height: 2rem;
    border-radius: 0.15rem;
    position: relative;
    .des {
      position: absolute;
      top: 0.2rem;
      left: 0.2rem;
      font-weight: 700;
      font-size: 18px;
    }
    img {
      width: 3.45rem;
      height: 2rem;
    }
  }
  .table {
    width: 3.45rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .name,
    .startTime,
    .time {
      width: 3.45rem;
      height: 0.8rem;
      margin-top: 0.1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 0.18rem;
        font-style: normal;
        font-weight: 900;
        color: #ff8c73;
        display: block;
        width: 3.45rem;
        height: 0.3rem;
        line-height: 0.3rem;
      }
      input {
        width: 2.8rem;
        height: 0.4rem;
        text-align: center;
        font-size: 0.13rem;
        font-weight: 400;
        outline: none;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.6);
        border-radius: 0.15rem;
      }
      select {
        width: 2.8rem;
        height: 0.4rem;
        outline: none;
        border-radius: 0.15rem;
        background-color: #fff;
        option {
          width: 2.8rem;
          height: 0.4rem;
          text-align: center;
        }
      }
    }
  }
  .submit {
    width: 2rem;
    height: 0.5rem;
    margin: 0.2rem auto;
    background-color: #ff8c73;
    border-radius: 0.15rem;
    a {
      display: block;
      width: 2rem;
      height: 0.5rem;
      border-radius: 0.15rem;
      text-align: center;
      line-height: 0.5rem;
      font-size: 0.18rem;
      font-weight: 600;
      color: #fff;
    }
  }
}
.orange {
  background-color: #ffe7e7;
}

.blue {
  background-color: #dae1f4;
}

.green {
  background-color: #e4f3ee;
}
</style>
