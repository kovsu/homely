<template>
  <header>
    <div class="left-side">
      <p>16:06</p>
    </div>
    <div class="right-side">
      <p>中国电信</p>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
header {
  width: 3.9rem;
  height: 0.44rem;
  background: linear-gradient(
    174.47deg,
    #ffffff 4.41%,
    rgba(255, 255, 255, 0) 95.6%
  );
  .left-side {
    position: absolute;
    width: 0.54rem;
    height: 0.21rem;
    left: 0.24rem;
    top: 0.12rem;
    p {
      font-family: "SF Pro Text";
      font-style: normal;
      font-weight: 600;
      font-size: 0.15rem;
      line-height: 0.2rem;
    }
  }
  .right-side {
    position: absolute;
    width: 0.64rem;
    height: 0.21rem;
    right: 0.24rem;
    top: 0.12rem;
    p {
      font-family: "SF Pro Text";
      font-style: normal;
      font-weight: 600;
      font-size: 0.15rem;
      line-height: 0.2rem;
    }
  }
}
</style>
