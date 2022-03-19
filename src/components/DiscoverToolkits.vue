<template>
  <div class="toolKitsContainer">
    <div class="head">
      <div class="title">
        <p>TOOLKITS</p>
      </div>
      <a href="javascript:void(0);">See all</a>
    </div>
    <div class="tools">
      <div class="tool" v-for="(item, index) in tools" :key="index">
        <div :class="item.style" class="icon">
          <img :src="item.imgUrl" alt="" />
        </div>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import handle from "../utils/api";
export default {
  setup() {
    const data = reactive({
      tools: [],
    });

    onMounted(async () => {
      let res = await handle.getAllKits();
      console.log(res.data.data);
      data.tools = res.data.data;
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
@import "../utils/common.less";
.toolKitsContainer {
  width: 3.45rem;
  height: 1.23rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .head {
    width: 100%;
    height: 0.23rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p,
    a {
      .media-title();
    }
    a {
      color: @orange;
    }
  }
  .tools {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .tool {
      width: 0.72rem;
      height: 0.9rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      .icon {
        width: 0.65rem;
        height: 0.65rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 0.32rem;
          height: 0.45rem;
        }
      }
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 0.16rem;
      }
    }
  }
}

.orange {
  background-color: #ffe4de;
  border-radius: 38% 62% 67% 33% / 30% 53% 47% 70%;
}

.green {
  background-color: #e4f3ee;
  border-radius: 47% 53% 58% 42% / 84% 49% 51% 16%;
}

.blue2 {
  background-color: #dcf1f9;
  border-radius: 70% 30% 43% 57% / 43% 13% 87% 57%;
}

.yellow {
  background-color: #fff6d6;
  border-radius: 20% 80% 27% 73% / 85% 30% 70% 15%;
}
</style>
