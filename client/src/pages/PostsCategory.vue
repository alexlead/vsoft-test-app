<template>
  <div class="container">
    <div class="row">
      <div class="col" v-for="i in 10" :key="i">
        <PostCategoryCard :id="i" />
      </div>
    </div>
  </div>
</template>
<script>
import PostCategoryCard from "../components/PostCategoryCard.vue";
export default {
  components: {
    PostCategoryCard,
  },
};
</script>
<style lang='scss' scoped>
.container {
  max-width: 1200px;
  width: 100%;
  margin: 10px auto;
  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    .col {
      width: 24%;
    }
  }
}
</style>