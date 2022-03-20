<template>
  <div>
    <DiscoverSearch />
    <DiscoverToolkits />
    <DiscoverLeft />
    <DiscoverCategeoris />
  </div>
</template>

<script>
import DiscoverSearch from "../components/DiscoverSearch.vue";
import DiscoverToolkits from "@/components/DiscoverToolkits.vue";
import DiscoverLeft from "@/components/DiscoverLeft.vue";
import DiscoverCategeoris from "@/components/DiscoverCategeoris.vue";

export default {
  components: {
    DiscoverSearch,
    DiscoverToolkits,
    DiscoverLeft,
    DiscoverCategeoris,
  },
};
</script>

<style lang="less"></style>
