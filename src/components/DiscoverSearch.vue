<template>
  <div class="searchContainer">
    <div class="title">
      <p>Hey, it's time to build!</p>
    </div>
    <div class="search">
      <input type="text" placeholder="Search tools,toolkits,tutorials..." />
    </div>
  </div>
</template>

<script></script>
<style lang="less" scoped>
@import "../utils/common.less";
.searchContainer {
  width: 3.45rem;
  height: 1.06rem;
  margin: 0.25rem auto;
  .title {
    margin-bottom: 0.2rem;
    p {
      .large-title();
    }
  }
  .search {
    width: 100%;
    height: 0.6rem;
    position: relative;
    input {
      width: 3.05rem;
      height: 100%;
      outline: none;
      border: 1px solid #e5e5ea;
      border-radius: 1rem;
      font-size: 0.17rem;
      padding-left: 0.4rem;
    }
    &::before {
      content: "";
      display: block;
      width: 0.24rem;
      height: 0.24rem;
      background: url("../assets/search.png") no-repeat;
      background-size: cover;
      position: absolute;
      top: 0.18rem;
      left: 0.12rem;
    }
  }
}
</style>
